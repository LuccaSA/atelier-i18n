import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: BarComponent },
];

@NgModule({
	declarations: [
		BarComponent,
	],
	imports: [
		RouterModule.forChild(routes),
	],
})
export class BarModule { }
