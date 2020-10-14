import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';


export class CommonLanguageLoader implements TranslateLoader {
  constructor(protected http: HttpClient){
		console.log('languageLoader');
	}

  getTranslation(lang: string): Observable<any> {
		console.log('getTranslation');
    return this.http.get(`./assets/i18n/i18n.common.${lang}.json`);
  }
}