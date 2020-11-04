import { NgModule } from '@angular/core';
import { LuTranslationUrlsModule } from '../lu-translate/lu-translation-url.module';
import { SharedComponent } from './shared.component';

@NgModule({
	declarations: [
		SharedComponent,
	],
	exports: [
		SharedComponent,
	],
	imports: [
		LuTranslationUrlsModule.forChild(['/assets/i18n/i18n.shared.{{lang}}.json']),
	],
})
export class SharedModule { }
