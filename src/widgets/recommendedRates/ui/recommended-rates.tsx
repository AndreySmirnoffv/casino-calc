import { BetProbabilityTable } from "@features/betProbabilityTable";
import { useCalculateProbabilities } from "@shared/hooks/use-calculate-probabilities.ts";
import { Title } from "@shared/ui/title";
import { IRecommendedRates } from "@widgets/recommendedRates/model/types.ts";

export const RecommendedRates = ({ selectedNumbers }: IRecommendedRates) => {
	const numbers = selectedNumbers.map(number => number.number);

	const probabilities = useCalculateProbabilities(numbers);

	return (
		<div>
			<Title>Рекомендованные ставки:</Title>
			<BetProbabilityTable probabilities={probabilities} />
		</div>
	);
};
