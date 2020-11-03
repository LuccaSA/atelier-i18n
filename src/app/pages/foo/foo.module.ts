import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LuTranslationsLoader, LuTranslationUrlsModule } from 'src/app/language-loader';
import { FooComponent } from './foo.component';

const routes: Routes = [
  { path: '', component: FooComponent },
];

@NgModule({
  declarations: [
    FooComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    LuTranslationUrlsModule.forChild(['/assets/i18n/i18n.foo.{{lang}}.json']),
    TranslateModule.forChild({
      // defaultLanguage: 'en',
      loader: {provide: TranslateLoader, useClass: LuTranslationsLoader},
      isolate: true,
    }),
  ]
})
export class FooModule {
  constructor(
    private translateService: TranslateService,
    @Inject(LOCALE_ID) locale: string
    ) {
    console.log('FooModule', locale);
    translateService.use(locale.replace(/\-.*$/, ''));
  }
}
