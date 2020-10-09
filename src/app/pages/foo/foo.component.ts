import { Component } from '@angular/core';

@Component({
	selector: 'app-foo',
	template: `
		<h2>Onglet Foo</h2>
		<h3>ce titre est specifique a l'onglet Foo</h3>
		<p>ce text apparait aussi dans l'autre onglet</p>
	`,
	styles: []
})
export class FooComponent {}
