import { IRouletteTable } from "@features/rouletteTable/model/types.ts";

import styles from "./roulette-table.module.scss";

export const RouletteTable = ({ setSelectedNumbers }: IRouletteTable) => {
	const numbers = [
		{ value: 0, color: "green" },
		{ value: 3, color: "red" },
		{ value: 6, color: "black" },
		{ value: 9, color: "red" },
		{ value: 12, color: "red" },
		{ value: 15, color: "black" },
		{ value: 18, color: "red" },
		{ value: 21, color: "red" },
		{ value: 24, color: "black" },
		{ value: 27, color: "red" },
		{ value: 30, color: "red" },
		{ value: 33, color: "black" },
		{ value: 36, color: "red" },
		{ value: 2, color: "black" },
		{ value: 5, color: "red" },
		{ value: 8, color: "black" },
		{ value: 11, color: "black" },
		{ value: 14, color: "red" },
		{ value: 17, color: "black" },
		{ value: 20, color: "black" },
		{ value: 23, color: "red" },
		{ value: 26, color: "black" },
		{ value: 29, color: "black" },
		{ value: 32, color: "red" },
		{ value: 35, color: "black" },
		{ value: 1, color: "red" },
		{ value: 4, color: "black" },
		{ value: 7, color: "red" },
		{ value: 10, color: "black" },
		{ value: 13, color: "black" },
		{ value: 16, color: "red" },
		{ value: 19, color: "red" },
		{ value: 22, color: "black" },
		{ value: 25, color: "red" },
		{ value: 28, color: "black" },
		{ value: 31, color: "black" },
		{ value: 34, color: "red" },
	];

	return (
		<table className={styles.analiz}>
			<tbody>
				<tr>
					<td colSpan={13}>Нажмите на цифру, которая выпала на рулетке</td>
				</tr>
				<tr>
					<td className={styles.green} rowSpan={3}>
						<button
							type={"button"}
							onClick={() =>
								setSelectedNumbers(prev => [
									...prev,
									{ number: 0, color: "green" },
								])
							}>
							0
						</button>
					</td>
					{numbers.slice(1, 12).map(num => (
						<td key={num.value} className={styles[num.color]}>
							<button
								type={"button"}
								onClick={() =>
									setSelectedNumbers(prev => [
										...prev,
										{ number: num.value, color: num.color },
									])
								}>
								{num.value}
							</button>
						</td>
					))}
				</tr>
				<tr>
					{numbers.slice(13, 24).map(num => (
						<td key={num.value} className={styles[num.color]}>
							<button
								type={"button"}
								onClick={() =>
									setSelectedNumbers(prev => [
										...prev,
										{ number: num.value, color: num.color },
									])
								}>
								{num.value}
							</button>
						</td>
					))}
				</tr>
				<tr>
					{numbers.slice(25, 36).map(num => (
						<td key={num.value} className={styles[num.color]}>
							<button
								type={"button"}
								onClick={() =>
									setSelectedNumbers(prev => [
										...prev,
										{ number: num.value, color: num.color },
									])
								}>
								{num.value}
							</button>
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
};
