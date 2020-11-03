import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalModule } from '@lucca/principal';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { LuTranslationUrlsModule } from './lu-translate/lu-translation-url.module';
import { LuTranslationsLoader } from './lu-translate/translation-loader';

const routes: Routes = [
  { path: 'bar', loadChildren: () => import('./pages/bar').then(m => m.BarModule) },
  { path: 'foo', loadChildren: () => import('./pages/foo').then(m => m.FooModule) },
];


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
