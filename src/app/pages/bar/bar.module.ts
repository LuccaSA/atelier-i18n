import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LuTranslationUrlsModule } from '../lu-translate/lu-translation-url.module';
import { LuTranslationsLoader } from '../lu-translate/translation-loader';
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
export class BarModule { }
