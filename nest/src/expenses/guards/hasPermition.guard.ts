import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class HasPermitionGuard implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      const admin = request.headers['admin'];
      if (!admin) {
        throw new UnauthorizedException('permittion denied');
      }
      return true;
    }
  }
  