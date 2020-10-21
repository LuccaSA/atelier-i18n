import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { TranslateModule } from '@ngx-translate/core';
import { PreloadResolver } from 'src/app/transloco/preloader.resolver';
import { BarComponent } from './bar.component';

const routes: Routes = [
	// { path: '', component: BarComponent },
	{ path: '', component: BarComponent, resolve: { translations: PreloadResolver } },
];

@NgModule({
	declarations: [
		BarComponent,
	],
	imports: [
		RouterModule.forChild(routes),
		TranslocoModule,
		TranslateModule
	],
	providers: [
		PreloadResolver,
		{ provide: TRANSLOCO_SCOPE, useValue: 'bar' }
	]
})
export class BarModule {}
