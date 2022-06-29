import { Injectable } from '@nestjs/common';
import { Observable, interval } from 'rxjs';
import { tap, take, finalize } from 'rxjs/operators';

@Injectable()
export class AppService {
  getLongRequest(): Observable<number> {
  
    const source = interval(500);

    return source.pipe(
      take(6),
      tap((index) => console.log(index + 1)),
      finalize(() => console.log('Finished Long Request')),
    );
  }
}
