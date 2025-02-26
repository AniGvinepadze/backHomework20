import {
    BadGatewayException,
    BadRequestException,
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';

@Injectable()
export class HasEmail implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const email = request.headers['email'];
    if (!email) {
      throw new BadRequestException('permition denied');
    }
    return true;
  }
}

