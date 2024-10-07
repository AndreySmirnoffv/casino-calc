import { BetProbabilityTable } from "@features/betProbabilityTable";
import { Title } from "@shared/ui/title";

export const RecommendedRates = () => {
	return (
		<div>
			<Title>Рекомендованные ставки:</Title>
			<BetProbabilityTable />
		</div>
	);
};
