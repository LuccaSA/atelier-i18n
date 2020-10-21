import { Component } from '@angular/core';

@Component({
	selector: 'app-bar',
	template: `
		<h2 transloco="bar.TITLE"></h2>
		<p transloco="A_COMMON_KEY"></p>
	`,
	styles: []
})
export class BarComponent {}
