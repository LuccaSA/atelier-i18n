import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalModule } from './principal';
// import { PrincipalModule } from '@lucca/principal';

const routes: Routes = [
	{ path: 'bar', loadChildren: () => import('./pages/bar').then(m => m.BarModule) },
	{ path: 'foo', loadChildren: () => import('./pages/foo').then(m => m.FooModule) },
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		PrincipalModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
