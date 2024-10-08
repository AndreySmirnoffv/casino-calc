import { ITwoToOneStatsTable } from "@features/twoToOneStatsTable/model/types.ts";

import styles from "./two-to-one-stats-table.module.scss";

export const TwoToOneStatsTable = ({
	firstLine,
	secondLine,
	thirdLine,
}: ITwoToOneStatsTable) => {
	const totalCount = firstLine + secondLine + thirdLine;

	const stats = [
		{
			label: "2 to 1 (top)",
			value: firstLine,
			percentage:
				totalCount > 0
					? ((firstLine / totalCount) * 100).toFixed() + "%"
					: "0%",
			class: "first",
		},
		{
			label: "2 to 1 (middle)",
			value: secondLine,
			percentage:
				totalCount > 0
					? ((secondLine / totalCount) * 100).toFixed() + "%"
					: "0%",
			class: "second",
		},
		{
			label: "2 to 1 (bottom)",
			value: thirdLine,
			percentage:
				totalCount > 0
					? ((thirdLine / totalCount) * 100).toFixed() + "%"
					: "0%",
			class: "third",
		},
	] as const;

	return (
		<table className={styles.dozen}>
			<tbody>
				{stats.map(stat => (
					<tr key={stat.label} className={styles[stat.class]}>
						<td>{stat.label}</td>
						<td>{stat.value}</td>
						<td>{stat.percentage}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
