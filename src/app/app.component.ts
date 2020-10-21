import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<style>
			.langs {
				display: flex;
			}
			.langs span {
				flex: 1;
				text-decoration: underline;
				cursor: pointer;
				text-align: center;
			}
		</style>
		<div class="langs">
			<span title="de" (click)="setLang('de')">de</span>
			<span title="en" (click)="setLang('en')">en</span>
			<span title="es" (click)="setLang('es')">es</span>
			<span title="fr" (click)="setLang('fr')">fr</span>
			<span title="it" (click)="setLang('it')">it</span>
			<span title="nl" (click)="setLang('nl')">nl</span>
			<span title="nl-BE" (click)="setLang('nl-BE')">nl-BE</span>
			<span title="pt" (click)="setLang('pt')">pt</span>
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
	setLang(lang: string) {
		location.assign(location.pathname + '#' + lang);
		location.reload();
	}
}
