import { IRangeStatsTable } from "@features/rangeStatsTable/model/types.ts";

import styles from "./range-stats-table.module.scss";

export const RangeStatsTable = ({
	countRange1,
	countRange2,
}: IRangeStatsTable) => {
	const totalCount = countRange1 + countRange2;

	const stats = [
		{
			label: "1-18",
			value: countRange1,
			percentage:
				totalCount > 0
					? ((countRange1 / totalCount) * 100).toFixed() + "%"
					: "0%",
		},
		{
			label: "19-36",
			value: countRange2,
			percentage:
				totalCount > 0
					? ((countRange2 / totalCount) * 100).toFixed() + "%"
					: "0%",
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
