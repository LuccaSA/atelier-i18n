import { Component } from '@angular/core';

@Component({
	selector: 'app-foo',
	template: `
		<h2 transloco="foo.TITLE"></h2>
		<p transloco="A_COMMON_KEY"></p>
	`,
	styles: []
})
export class FooComponent {}
