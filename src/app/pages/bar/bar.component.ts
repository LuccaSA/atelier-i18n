import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
	selector: 'app-bar',
	template: `
		<h2 transloco="bar.TITLE"></h2>
		<h2>{{ fromService }}</h2>
		<p translate="A_COMMON_KEY"></p>
	`,
	styles: []
})
export class BarComponent {
	fromService: string;

	constructor(service: TranslocoService) {
		this.fromService = service.translate('bar.TITLE');
	}
}
