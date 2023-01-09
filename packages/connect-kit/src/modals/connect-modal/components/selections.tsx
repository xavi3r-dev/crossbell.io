import React from "react";
import classNames from "classnames";

import styles from "./selections.module.css";

export type Selection = {
	id: string;
	title: React.ReactNode;
	icon: React.ReactNode;
	style?: React.CSSProperties;
	onClick: () => void;
};

export type SelectionsProps = {
	items: Selection[];
};

export function Selections({ items }: SelectionsProps) {
	return (
		<div className={styles.container}>
			{items.map((item) => (
				<div
					key={item.id}
					className={classNames(styles.item, "ux-overlay")}
					style={item.style}
					onClick={item.onClick}
				>
					<span className={styles.itemTitle}>{item.title}</span>
					{item.icon}
				</div>
			))}
		</div>
	);
}