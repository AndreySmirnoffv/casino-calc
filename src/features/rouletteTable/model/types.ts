import { Dispatch, SetStateAction } from "react";

export interface IRouletteTable {
	setSelectedNumbers: Dispatch<
		SetStateAction<{ number: number; color: string }[]>
	>;
}
