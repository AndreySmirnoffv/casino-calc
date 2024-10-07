import { IButton } from "@shared/ui/button/model/types.ts";

export const Button = ({ children }: IButton) => {
	return <button type={"button"}>{children}</button>;
};
