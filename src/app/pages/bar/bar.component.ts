import { Component } from '@angular/core';

@Component({
	selector: 'app-bar',
	template: `
		<h2>Onglet Bar</h2>
		<h3>ce titre est specifique a l'onglet Bar</h3>
		<p>ce text apparait translatejjjh dans l'autre onglet</p>
		<h3>ce titre est specifique a l'onglet Foo {{'FOO' +
			'_' +
			'0' | translate }}</h3>
		<h3>ce titre est specifique a l'onglet Bar {{myKey |
			translate }}</h3>
		<p>ce text apparait aussi dans l'autre onglet parent => {{'COMMON_0' | translate}}</p>
		<p>il est aussi possible de chager des composant d'autres modules <app-shared></app-shared></p>
	`,
	styles: []
})
export class BarComponent {
	public myKey = 'BAR' +  	'_' 	+ 1;
	  	public toto() { 		console.log('tests');
			 }
}
