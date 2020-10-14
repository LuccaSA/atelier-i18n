import { Component } from '@angular/core';

@Component({
	selector: 'app-bar',
	template: `
		<h2>Onglet Bar</h2>
		<h3>ce titre est specifique a l'onglet Bar</h3>
		<p>ce text apparait aussi dans l'autre onglet</p>
		<div transloco="COMMON_5"></div>
		<div transloco="bar.BAR_5"></div>
	`,
	styles: []
})
export class BarComponent {}
