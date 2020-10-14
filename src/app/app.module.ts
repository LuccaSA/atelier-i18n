import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';


const routes: Routes = [
	{ path: 'bar', loadChildren: () => import('./pages/bar').then(m => m.BarModule) },
	{ path: 'foo', loadChildren: () => import('./pages/foo').then(m => m.FooModule) },
];

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		HttpClientModule,
		TranslocoRootModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'fr-FR' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
