import { Component, Inject, LOCALE_ID } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
	selector: 'app-root',
	template: `
		<div style="display: flex">
			<span style="flex: 1; text-decoration: underline; cursor: pointer; text-align: center;" title="de" (click)="setLang('de')">de</span>
			<span style="flex: 1; text-decoration: underline; cursor: pointer; text-align: center;" title="en" (click)="setLang('en')">en</span>
			<span style="flex: 1; text-decoration: underline; cursor: pointer; text-align: center;" title="es" (click)="setLang('es')">es</span>
			<span style="flex: 1; text-decoration: underline; cursor: pointer; text-align: center;" title="fr" (click)="setLang('fr')">fr</span>
			<span style="flex: 1; text-decoration: underline; cursor: pointer; text-align: center;" title="it" (click)="setLang('it')">it</span>
			<span style="flex: 1; text-decoration: underline; cursor: pointer; text-align: center;" title="nl" (click)="setLang('nl')">nl</span>
			<span style="flex: 1; text-decoration: underline; cursor: pointer; text-align: center;" title="nl-BE" (click)="setLang('nl-BE')">nl-BE</span>
			<span style="flex: 1; text-decoration: underline; cursor: pointer; text-align: center;" title="pt" (click)="setLang('pt')">pt</span>
		</div>
		<h1 transloco="APPLICATION_NAME"></h1>
		<div transloco="TITLE"></div>
		<p transloco="DESCRIPTION"></p>
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
	constructor(
		@Inject(LOCALE_ID) localeId: string,
		translocoService: TranslocoService
	) {
		translocoService.setActiveLang(localeId.split('-')[0]);
	}
	
	setLang(lang: string) {
		location.assign(location.pathname + '#' + lang);
		location.reload();
	}
}
