import { Component, Inject, LOCALE_ID } from '@angular/core';
import { IPrincipal, PRINCIPAL } from '@lucca/principal';

@Component({
	selector: 'app-root',
	template: `
		<h1>Atelier i18n</h1>
		<h2>bienvenue dans la sandbox</h2>
		<p>utilisateur connecté :
			<code>{{principal | json}}</code>
		</p>
		<p>locale : <code>{{locale}}</code></p>
		<p>cette SPA a 2 routes lazy loadées</p>
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
	constructor(
		@Inject(PRINCIPAL) public principal: IPrincipal,
		@Inject(LOCALE_ID) public locale: string,
	) {}
}
