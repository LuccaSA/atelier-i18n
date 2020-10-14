import { Component } from '@angular/core';

@Component({
	selector: 'app-foo',
	template: `
		<h2>Onglet Foo</h2>
		<h3>ce titre est specifique a l'onglet Foo</h3>
		<p>ce text apparait aussi dans l'autre onglet</p>
		<div transloco="COMMON_5"></div>
		<div transloco="foo.FOO_5"></div>
	`,
	styles: []
})
export class FooComponent {}
