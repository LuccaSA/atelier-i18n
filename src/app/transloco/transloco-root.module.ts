import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, LOCALE_ID, NgModule } from '@angular/core';
import {
  Translation,
  translocoConfig,
  TranslocoLoader,
  TranslocoModule,
  TranslocoService,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER
} from '@ngneat/transloco';
import { environment } from '../../environments/environment';
import { preloadInitializer } from './preloader.initializer';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['de', 'en', 'es', 'fr', 'it', 'nl', 'nl-BE', 'pt'],
        defaultLang: 'en',
        reRenderOnLangChange: false,
        prodMode: environment.production,
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    { provide: APP_INITIALIZER, multi: true, useFactory: preloadInitializer, deps: [LOCALE_ID, TranslocoService] },
  ]
})
export class TranslocoRootModule {}
