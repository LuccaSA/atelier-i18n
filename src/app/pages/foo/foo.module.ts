import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { PreloadResolver } from 'src/app/transloco/preloader.resolver';
import { FooComponent } from './foo.component';

const routes: Routes = [
	// { path: '', component: FooComponent },
	{ path: '', component: FooComponent, resolve: { translations: PreloadResolver } },
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
		PreloadResolver,
		{ provide: TRANSLOCO_SCOPE, useValue: 'foo' }
	]
})
export class FooModule { }
