import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class CommonLanguageLoader implements TranslateLoader {
  constructor(protected http: HttpClient){
		console.log('languageLoader');
	}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslateModule],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useClass: CommonLanguageLoader,
      },
      isolate: false,
    }),
  ]
})
export class NgxTranslateRootModule {}