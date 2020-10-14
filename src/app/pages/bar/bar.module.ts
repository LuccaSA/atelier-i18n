import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonLanguageLoader } from 'src/app/language-loader';
import { BarComponent } from './bar.component';

const routes: Routes = [
	{ path: '', component: BarComponent },
];

export class languageLoader extends CommonLanguageLoader {
  constructor(http: HttpClient){
		super(http);
		console.log('languageLoader BAAR');
	}

  getTranslation(lang: string): Observable<any> {
		console.log('getTranslation BAAR');
		return forkJoin([
			super.getTranslation(lang),
			this.http.get(`./assets/i18n/i18n.bar.${lang}.json`)
		]).pipe(
			map(([common, baar]) => ({
				...common,
				...baar
			})
			)
		);
  }
}

export function createTranslateLoader(http: HttpClient) {
		console.log('createTranslateLoader BAAR');
    return new languageLoader(http);
}


@NgModule({
	declarations: [
		BarComponent,
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		HttpClientModule,
		TranslateModule.forChild({
				defaultLanguage: 'en',
				loader: {
						provide: TranslateLoader,
						useFactory: createTranslateLoader,
						deps: [HttpClient]
				},
				isolate: true,
				// extend: true
				// isolate: true
		}),
	],
})
export class BarModule { }
