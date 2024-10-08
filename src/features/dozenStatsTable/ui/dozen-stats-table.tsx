import { IDozenStatsTable } from "@features/dozenStatsTable/model/types.ts";

import styles from "./dozen-stats-table.module.scss";

export const DozenStatsTable = ({
	firstDozen,
	secondDozen,
	thirdDozen,
}: IDozenStatsTable) => {
	const totalCount = firstDozen + secondDozen + thirdDozen;

	const stats = [
		{
			label: "1st Dozen",
			value: firstDozen,
			percentage:
				totalCount > 0
					? ((firstDozen / totalCount) * 100).toFixed() + "%"
					: "0%",
			class: "first",
		},
		{
			label: "2nd Dozen",
			value: secondDozen,
			percentage:
				totalCount > 0
					? ((secondDozen / totalCount) * 100).toFixed() + "%"
					: "0%",
			class: "second",
		},
		{
			label: "3rd Dozen",
			value: thirdDozen,
			percentage:
				totalCount > 0
					? ((thirdDozen / totalCount) * 100).toFixed() + "%"
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
