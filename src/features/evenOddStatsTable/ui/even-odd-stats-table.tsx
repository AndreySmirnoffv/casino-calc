import { IEvenOddStatsTable } from "@features/evenOddStatsTable/model/types.ts";

import styles from "./even-odd-stats-table.module.scss";

export const EvenOddStatsTable = ({
	countEven,
	countOdd,
}: IEvenOddStatsTable) => {
	const totalCount = countEven + countOdd;

	const stats = [
		{
			label: "Even",
			value: countEven,
			percentage:
				totalCount > 0
					? ((countEven / totalCount) * 100).toFixed() + "%"
					: "0%",
			color: "redr",
		},
		{
			label: "Odd",
			value: countOdd,
			percentage:
				totalCount > 0 ? ((countOdd / totalCount) * 100).toFixed() + "%" : "0%",
			color: "blackr",
		},
	];

	return (
		<table className={styles.stat}>
			<tbody>
				{stats.map(stat => (
					<tr key={stat.label}>
						<td>{stat.label} -</td>
						<td>{stat.value}</td>
						<td>{stat.percentage}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
