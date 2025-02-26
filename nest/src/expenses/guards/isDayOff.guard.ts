import {
    BadRequestException,
    CanActivate,
    ExecutionContext,
    Injectable,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class IsDayOff implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      const date = request.headers['date'];
      console.log(request.headers);
      if (date || date === '26 may') {
        throw new BadRequestException('permition denied');
      }
      return true;
    }
  }