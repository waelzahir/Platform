import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { TokenPayload } from '../types/Payload';
import { Reflector } from '@nestjs/core';
import { accounttype } from '@prisma/client';
  
  @Injectable()
  export class RoleGuard implements CanActivate {
    constructor(private jwtService: JwtService,private reflector: Reflector) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const role = this.reflector.getAllAndOverride("ROLE", [context.getHandler(), context.getClass()]);
	  if (typeof role === 'undefined')
        return true;
      console.log(request['user'].accounttype, role)
      if (request['user'].accounttype !== role)
            throw new HttpException(`action is ${role} only`, HttpStatus.BAD_REQUEST)
      return true
    }
  
   
  }