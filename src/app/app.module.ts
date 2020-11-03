import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalModule } from '@lucca/principal';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { LuTranslationUrlsModule } from './pages/lu-translate/lu-translation-url.module';
import { LuTranslationsLoader } from './pages/lu-translate/translation-loader';

const routes: Routes = [
  { path: 'bar', loadChildren: () => import('./pages/bar').then(m => m.BarModule) },
  { path: 'foo', loadChildren: () => import('./pages/foo').then(m => m.FooModule) },
];


// export interface IPrincipal {
// 	id: number;
// 	name: string;
// 	firstName: string;
// 	lastName: string;
// 	culture: ICulture;
// 	mail: string;
// }

// export interface ICulture {
// 	id: number;
// 	code: string;
// 	name: string;
// }

// export const PRINCIPAL = new InjectionToken<IPrincipal>('Principal');


// export function initPrincipal(initializer: PrincipalInitializer): () => Promise<void> {
// 	return () => initializer.initPrincipal();
// }
// export function getPrincipal(initializer: PrincipalInitializer): IPrincipal {
// 	return initializer.principal;
// }
// export function getLocale(initializer: PrincipalInitializer ): string {
//   console.log('getLocale', initializer.cultureCode);
// 	return initializer.cultureCode;
// }

// const bogusPrincipal: IPrincipal = {
// 	id: 12,
// 	name:  'sponge bob squarepants',
// 	firstName: 'sponge bob',
// 	lastName: 'squarepants',
// 	culture: {
// 		id: 1,
// 		code: 'fr-FR',
// 		name: 'francais',
// 	},
// 	mail: 'spongebob@bikini-bottom.com',
// };

// @Injectable()
// export class PrincipalInitializer {
// 	public principal: IPrincipal;
// 	public cultureCode: string = 'en-us-america';

// 	constructor() {}

// 	public initPrincipal(): Promise<void> {
//     this.principal = bogusPrincipal;
//     console.log('initPrincipal cultureCode', this.cultureCode, 'before');
//     this.cultureCode = bogusPrincipal.culture.code;
//     console.log('initPrincipal cultureCode', this.cultureCode);
//     return of(null).toPromise();
// 	}

// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    PrincipalModule,
    LuTranslationUrlsModule.forRoot(['/assets/i18n/i18n.common.{{lang}}.json']),
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: LuTranslationsLoader },
    }),
  ],
  providers: [
		// PrincipalInitializer,
		// { provide: APP_INITIALIZER, useFactory: initPrincipal, deps: [PrincipalInitializer], multi: true },
		// { provide: PRINCIPAL, useFactory: getPrincipal, deps: [PrincipalInitializer] },
		// { provide: LOCALE_ID, useFactory: getLocale, deps: [PrincipalInitializer] },
    // { provide: LOCALE_ID, useValue: 'en-US'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
