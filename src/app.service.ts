import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): Array<Object> {
    return [{ id: 1, name: "learn" }];
  }
}
