import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { TokenPayload } from '../types/Payload';
import { Reflector } from '@nestjs/core';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService,private reflector: Reflector) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const isPublic = this.reflector.getAllAndOverride("isPublic", [context.getHandler(), context.getClass()]);
		  if (isPublic)
          return true;
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException();
      }
      try {
        const payload:TokenPayload = await this.jwtService.verifyAsync(
          token,
          {
            secret: process.env.JWTSECRET
          }
        );
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException();
      }
      return true
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      if (request.cookies && "AccesToken" in request.cookies && request.cookies.AccesToken?.length > 0)
          return request.cookies.AccesToken;
    }
  }