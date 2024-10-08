import { IBetProbabilityTable } from "@features/betProbabilityTable/model/types.ts";

import styles from "./bet-probability-table.module.scss";

export const BetProbabilityTable = ({
	probabilities,
}: IBetProbabilityTable) => {
	const bets = [
		{
			label: "Red/Black",
			bet: probabilities.red >= probabilities.black ? "Black" : "Red",
			probability:
				probabilities.red >= probabilities.black
					? probabilities.red
					: probabilities.black,
		},
		{
			label: "Even/Odd",
			bet: probabilities.even >= probabilities.odd ? "Odd" : "Even",
			probability:
				probabilities.even >= probabilities.odd
					? probabilities.even
					: probabilities.odd,
		},
		{
			label: "1-18/19-36",
			bet:
				probabilities.range1to18 >= probabilities.range19to36
					? "19-36"
					: "1-18",
			probability:
				probabilities.range1to18 >= probabilities.range19to36
					? probabilities.range1to18
					: probabilities.range19to36,
		},
	] as const;

	return (
		<table className={styles.analiz}>
			<thead>
				<tr>
					<td></td>
					<td>Ставка</td>
					<td>Вероятность</td>
				</tr>
			</thead>
			<tbody>
				{bets.map(bet => (
					<tr key={bet.label}>
						<td>{bet.label}</td>
						<td>{bet.bet}</td>
						<td className={bet.probability >= 90 ? styles.top : ""}>
							{bet.probability}%
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
