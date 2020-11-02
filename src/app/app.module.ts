import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { LuTranslationsLoader, LuTranslationUrlsModule } from './language-loader';

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
    LuTranslationUrlsModule.forRoot(['/assets/i18n/i18n.common.{{lang}}.json']),
    TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: { provide: TranslateLoader, useClass: LuTranslationsLoader },
        isolate: false,
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    console.log('AppModule');
    // translate.setDefaultLang('en');
    // translate.use('en');
  }
}
