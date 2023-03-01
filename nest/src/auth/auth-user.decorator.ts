import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthUserFn = (data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
}; 

export const AuthUser = createParamDecorator(AuthUserFn);