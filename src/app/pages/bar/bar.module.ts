import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LuTranslationsLoader, LuTranslationUrlsModule } from 'src/app/language-loader';
import { BarComponent } from './bar.component';

const routes: Routes = [
	{ path: '', component: BarComponent },
];

@NgModule({
	declarations: [
		BarComponent,
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		HttpClientModule,
		LuTranslationUrlsModule.forChild(['/assets/i18n/i18n.bar.{{lang}}.json']),
    TranslateModule.forChild({
			loader: {provide: TranslateLoader, useClass: LuTranslationsLoader},
      isolate: true,
    }),
	],
})
export class BarModule {

  constructor(
    private translateService: TranslateService,
    @Inject(LOCALE_ID) locale: string
    ) {
    console.log('BarModule', locale);
    translateService.use(locale.replace(/\-.*$/, ''));
  }
}
