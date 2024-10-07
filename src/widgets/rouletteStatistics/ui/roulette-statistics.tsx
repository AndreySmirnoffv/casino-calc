import { DozenStatsTable } from "@features/dozenStatsTable";
import { EvenOddStatsTable } from "@features/evenOddStatsTable";
import { RangeStatsTable } from "@features/rangeStatsTable";
import { TwoToOneStatsTable } from "@features/twoToOneStatsTable";
import { ColorStatsTable } from "@features/сolorStatsTable";
import { Title } from "@shared/ui/title";
import { IRouletteStatistics } from "@widgets/rouletteStatistics/model/types.ts";

import styles from "./roulette-statistics.module.scss";

export const RouletteStatistics = ({
	statisticsSpins,
}: IRouletteStatistics) => {
	return (
		<div className={styles.statistic}>
			<Title>Статистика рулетки:</Title>
			<div className={styles.statistic__holder}>
				<div className={styles.statistic__line}>
					<ColorStatsTable
						countBlack={statisticsSpins.black}
						countRed={statisticsSpins.red}
					/>
					<EvenOddStatsTable
						countEven={statisticsSpins.even}
						countOdd={statisticsSpins.odd}
					/>
					<RangeStatsTable
						countRange1={statisticsSpins.range1to18}
						countRange2={statisticsSpins.range19to36}
					/>
				</div>
				<div className={styles.statistic__line}>
					<DozenStatsTable
						firstDozen={statisticsSpins.firstDozen}
						secondDozen={statisticsSpins.secondDozen}
						thirdDozen={statisticsSpins.thirdDozen}
					/>
					<TwoToOneStatsTable
						firstLine={statisticsSpins.line1}
						secondLine={statisticsSpins.line2}
						thirdLine={statisticsSpins.line3}
					/>
				</div>
			</div>
		</div>
	);
};
