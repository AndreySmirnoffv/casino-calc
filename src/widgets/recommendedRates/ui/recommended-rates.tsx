import { BetProbabilityTable } from "@features/betProbabilityTable";
import { Title } from "@shared/ui/title";
import { IRecommendedRates } from "@widgets/recommendedRates/model/types.ts";

const calculateProbabilities = (numbers: number[]) => {
	const totalSpins = numbers.length;

	const result = {
		red: 0,
		black: 0,
		even: 0,
		odd: 0,
		range1to18: 0,
		range19to36: 0,
	};

	numbers.forEach((number: number) => {
		if (
			[
				1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
			].includes(number)
		) {
			result.red += 1;
		} else {
			result.black += 1;
		}

		if (number % 2 === 0) {
			result.even += 1;
		} else {
			result.odd += 1;
		}

		if (number >= 1 && number <= 18) {
			result.range1to18 += 1;
		}
		if (number >= 19 && number <= 36) {
			result.range19to36 += 1;
		}
	});

	const probabilities = {
		red: (result.red / totalSpins) * 100,
		black: (result.black / totalSpins) * 100,
		even: (result.even / totalSpins) * 100,
		odd: (result.odd / totalSpins) * 100,
		range1to18: (result.range1to18 / totalSpins) * 100,
		range19to36: (result.range19to36 / totalSpins) * 100,
	};

	const adjustValue = (value: number) =>
		Math.min(Math.round(value * 100) / 100, 100);

	return {
		red: adjustValue(probabilities.red),
		black: adjustValue(probabilities.black),
		even: adjustValue(probabilities.even),
		odd: adjustValue(probabilities.odd),
		range1to18: adjustValue(probabilities.range1to18),
		range19to36: adjustValue(probabilities.range19to36),
	};
};

export const RecommendedRates = ({ selectedNumbers }: IRecommendedRates) => {
	const numbers = selectedNumbers.map(number => number.number);

	const probabilities = calculateProbabilities(numbers);

	return (
		<div>
			<Title>Рекомендованные ставки:</Title>
			<BetProbabilityTable probabilities={probabilities} />
		</div>
	);
};
