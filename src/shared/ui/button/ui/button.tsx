import { IButton } from "@shared/ui/button/model/types.ts";

export const Button = ({ children, ...props }: IButton) => {
	return (
		<button type={"button"} {...props}>
			{children}
		</button>
	);
};
