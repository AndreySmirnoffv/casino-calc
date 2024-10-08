import { RouletteTable } from "@features/rouletteTable";
import { Button } from "@shared/ui/button";
import { IChangeNumber } from "@widgets/changeNumber/model/types.ts";

import styles from "./change-number.module.scss";

export const ChangeNumber = ({
	selectedNumbers,
	setSelectedNumbers,
}: IChangeNumber) => {
	return (
		<div className={styles.numbers}>
			<div className={styles.numbers__selected}>
				{selectedNumbers.map((selectedNumber, id) => (
					// eslint-disable-next-line sonarjs/no-array-index-key
					<p key={id} className={`${styles.number} ${selectedNumber.color}`}>
						{selectedNumber.number}
					</p>
				))}
			</div>
			<RouletteTable setSelectedNumbers={setSelectedNumbers} />
			<div className={styles.numbers__buttons}>
				<Button onClick={() => setSelectedNumbers([])}>Сброс</Button>
				<Button
					onClick={() =>
						setSelectedNumbers(prevState => prevState.slice(0, -1))
					}>
					Отмена
				</Button>
			</div>
		</div>
	);
};
