import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>Atelier i18n</h1>
		<h2>bienvenue dans la sandbox</h2>
		<p>cette SPA a 2 routes avec un module lazy loade</p>
		<div transloco="COMMON_5"></div>
		<nav>
			<ul>
				<li><a routerLink="/foo">Foo</a></li>
				<li><a routerLink="/bar">Bar</a></li>
			</ul>
		<nav>
		<router-outlet></router-outlet>
	`,
	styles: []
})
export class AppComponent {
	title = 'sandbox';
}
