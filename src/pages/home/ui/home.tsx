import { useState } from "react";

import { ChangeNumber } from "@widgets/changeNumber";
import { RecommendedRates } from "@widgets/recommendedRates";
import { RouletteStatistics } from "@widgets/rouletteStatistics";

import styles from "./home.module.scss";

const countNumbers = (numbers: { number: number; color: string }[]) => {
	const result = {
		red: 0,
		black: 0,
		even: 0,
		odd: 0,
		range1to18: 0,
		range19to36: 0,
		firstDozen: 0,
		secondDozen: 0,
		thirdDozen: 0,
		line1: 0,
		line2: 0,
		line3: 0,
	};

	numbers.forEach(({ color, number }) => {
		if (color === "red") result.red += 1;
		if (color === "black") result.black += 1;

		if (number % 2 === 0) result.even += 1;
		else result.odd += 1;

		if (number >= 1 && number <= 18) result.range1to18 += 1;
		if (number >= 19 && number <= 36) result.range19to36 += 1;

		if (number >= 1 && number <= 12) result.firstDozen += 1;
		else if (number >= 13 && number <= 24) result.secondDozen += 1;
		else if (number >= 25 && number <= 36) result.thirdDozen += 1;

		if ([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33].includes(number))
			result.line1 += 1;
		if ([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32].includes(number))
			result.line2 += 1;
		if ([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31].includes(number))
			result.line3 += 1;
	});

	return result;
};

export const Home = () => {
	const [selectedNumbers, setSelectedNumbers] = useState<
		{ number: number; color: string }[]
	>([]);

	const statisticsSpins = countNumbers(selectedNumbers);

	return (
		<div className={styles.home}>
			<ChangeNumber
				selectedNumbers={selectedNumbers}
				setSelectedNumbers={setSelectedNumbers}
			/>
			<RouletteStatistics statisticsSpins={statisticsSpins} />
			<RecommendedRates />
		</div>
	);
};
