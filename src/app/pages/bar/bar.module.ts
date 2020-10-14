import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
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
		TranslocoModule,
	],
	providers: [
		{ provide: TRANSLOCO_SCOPE, useValue: 'bar' }
	]
})
export class BarModule { }
