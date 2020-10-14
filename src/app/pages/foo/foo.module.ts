import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
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
		TranslocoModule,
	],
	providers: [
		{ provide: TRANSLOCO_SCOPE, useValue: 'foo' }
	]
})
export class FooModule { }
