import { Inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TranslocoService, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Injectable()
export class PreloadResolver implements Resolve<void> {
  constructor(
    @Inject(TRANSLOCO_SCOPE) private scope: string,
    private service: TranslocoService,
  ) {}
  resolve(): Observable<any> {
    return this.service.load(this.scope + '/' + this.service.getActiveLang());
  }
}