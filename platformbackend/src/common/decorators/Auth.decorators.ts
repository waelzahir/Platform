import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { TokenPayload } from "../types/Payload";

export const GetCurrentUser = createParamDecorator(
	(data: keyof TokenPayload  | undefined, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest();
		return request.user[data];
	},
);