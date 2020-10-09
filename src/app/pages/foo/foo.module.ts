import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
	],
})
export class FooModule { }
