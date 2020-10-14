import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonLanguageLoader } from 'src/app/language-loader';
import { FooComponent } from './foo.component';

const routes: Routes = [
	{ path: '', component: FooComponent },
];

export class languageLoader extends CommonLanguageLoader {
  constructor(http: HttpClient){
		super(http);
		console.log('languageLoader FOO');
	}

  getTranslation(lang: string): Observable<any> {
		console.log('getTranslation FOO');
		return forkJoin([
			super.getTranslation(lang),
			this.http.get(`./assets/i18n/i18n.foo.${lang}.json`)
		]).pipe(
			map(([common, foo]) => ({
				...common,
				...foo
			})
			)
		);
  }
}

export function createTranslateLoader(http: HttpClient) {
		console.log('createTranslateLoader FOO');
    return new languageLoader(http);
}


@NgModule({
	declarations: [
		FooComponent,
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
export class FooModule {
	constructor(private translate: TranslateService) {
		console.log('FooModule');
		translate.setDefaultLang('en');
		translate.use('en');
	}
}
