import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
	selector: 'app-foo',
	template: `
		<h2 transloco="foo.TITLE"></h2>
		<h2>{{ fromService }}</h2>
		<p transloco="A_COMMON_KEY"></p>
	`,
	styles: []
})
export class FooComponent {
	fromService: string;

	constructor(service: TranslocoService) {
		this.fromService = service.translate('foo.TITLE');
	}
}
