import styles from "./bet-probability-table.module.scss";

export const BetProbabilityTable = () => {
	const bets = [
		{ label: "Red/Black", bet: "Black", probability: "89.10%" },
		{ label: "Even/Odd", bet: "Even", probability: "51.35%" },
		{ label: "1-18/19-36", bet: "1-18", probability: "51.35%" },
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
						<td>{bet.probability}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
