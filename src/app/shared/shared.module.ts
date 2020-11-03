import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LuTranslationUrlsModule } from '../lu-translate/lu-translation-url.module';
import { SharedComponent } from './shared.component';

const routes: Routes = [
	{ path: '', component: SharedComponent },
];

@NgModule({
	declarations: [
		SharedComponent,
	],
	exports: [
		SharedComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		LuTranslationUrlsModule.forChild(['/assets/i18n/i18n.shared.{{lang}}.json']),
    TranslateModule,
	],
})
export class SharedModule { }
