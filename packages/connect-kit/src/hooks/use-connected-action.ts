import React from "react";
import { useRefCallback } from "@crossbell/util-hooks";

import { useConnectModal } from "../modals/connect-modal/stores";
import { useUpgradeAccountModal } from "../modals/upgrade-account-modal/stores";
import { useAccountState } from "./account-state";

type Callback = () => void;
type ConnectType = "wallet" | "email" | "any";

const isConnected = (type: ConnectType): boolean => {
	const state = useAccountState.getState();

	switch (type) {
		case "email":
			return !!state.email;
		case "wallet":
			return !!state.wallet && !state.email;
		case "any":
			return !!state.computed.account;
	}
};

export type UseConnectedActionOptions<P extends any[]> = {
	connectType?: ConnectType;
	fallback?: (...params: P) => void;
};

/*
 * Used to wrap an action that needs to be connected/logged in/upgraded before it can be executed.
 * If the user is not connected/logged in, this hooks will display the connect/login/upgrade modal and
 * automatically execute the action when the condition is met.
 * */
export function useConnectedAction<P extends any[]>(
	action: (...params: P) => unknown,
	{ connectType = "any", fallback }: UseConnectedActionOptions<P> = {}
): (...params: P) => void {
	const callbackRef = React.useRef<Callback>();
	const { isActive } = useConnectModal();

	React.useEffect(() => {
		if (!isActive) {
			if (callbackRef.current && isConnected(connectType)) {
				callbackRef.current();
				callbackRef.current = undefined;
			}
		}
	}, [isActive, connectType]);

	return useRefCallback((...params) => {
		if (isConnected(connectType)) {
			action(...params);
		} else if (fallback) {
			fallback(...params);
		} else {
			const email = useAccountState.getState().email;
			const isEmailConnected = !!email;

			if (connectType === "wallet" && isEmailConnected) {
				const emailCharacterId = email.characterId;

				callbackRef.current = () => {
					const walletCharacterId =
						useAccountState.getState().wallet?.characterId;

					// Check if the account upgrade has been completed.
					if (emailCharacterId === walletCharacterId) {
						action(...params);
					}
				};

				useUpgradeAccountModal.getState().show();
			} else {
				callbackRef.current = () => action(...params);
				useConnectModal.getState().show();
			}
		}
	});
}