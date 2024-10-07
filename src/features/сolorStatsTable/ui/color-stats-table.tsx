import { IColorStatsTable } from "@features/сolorStatsTable/model/types.ts";

import styles from "./color-stats-table.module.scss";

export const ColorStatsTable = ({ countBlack, countRed }: IColorStatsTable) => {
	const totalCount = countRed + countBlack;

	const stats = [
		{
			label: "Red",
			value: countRed,
			percentage:
				totalCount > 0 ? ((countRed / totalCount) * 100).toFixed() + "%" : "0%",
			color: "redr",
		},
		{
			label: "Black",
			value: countBlack,
			percentage:
				totalCount > 0
					? ((countBlack / totalCount) * 100).toFixed() + "%"
					: "0%",
			color: "blackr",
		},
	];

	return (
		<table className={styles.redb}>
			<tbody>
				{stats.map(stat => (
					<tr key={stat.label} className={styles[stat.color]}>
						<td>{stat.label} -</td>
						<td>{stat.value}</td>
						<td>{stat.percentage}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
