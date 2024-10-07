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
					<p key={id} className={`${styles.number} ${selectedNumber.color}`}>
						{selectedNumber.number}
					</p>
				))}
			</div>
			<RouletteTable setSelectedNumbers={setSelectedNumbers} />
			<div>
				<Button>Сброс</Button>
				<Button>Отмена</Button>
			</div>
		</div>
	);
};
