import { Component } from '@angular/core';

@Component({
	selector: 'app-foo',
	template: `
		<h2>Onglet Foo</h2>
		<h3>ce titre est specifique a l'onglet Foo {{'FOO_0' | translate }}</h3>
		<p>ce text apparait aussi dans l'autre onglet parent => {{'COMMON_0' | translate}}</p>
		<app-shared></app-shared>
	`,
	styles: []
})
export class FooComponent {}
