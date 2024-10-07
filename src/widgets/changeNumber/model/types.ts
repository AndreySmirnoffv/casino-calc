import { Dispatch, SetStateAction } from "react";

export interface IChangeNumber {
	selectedNumbers: { number: number; color: string }[];
	setSelectedNumbers: Dispatch<
		SetStateAction<{ number: number; color: string }[]>
	>;
}
