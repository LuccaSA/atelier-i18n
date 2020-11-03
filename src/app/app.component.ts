import { Component, Inject, LOCALE_ID } from '@angular/core';
import { IPrincipal, PRINCIPAL } from '@lucca/principal';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>Atelier i18n</h1>
		<h2>bienvenue dans la sandbox</h2>
		<p>cette SPA a 2 routes avec un module lazy loade {{'COMMON_0' | translate}}</p>
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
		translateService: TranslateService,
		@Inject(PRINCIPAL) principal: IPrincipal,
		@Inject(LOCALE_ID) locale: string,
	) {
    translateService.use(locale.replace(/\-.*$/, ''));
		console.log(`app component constructor - principal: ${principal}`);
		console.log(`app component constructor - locale: ${locale}`);

	}
}
