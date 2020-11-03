import { Component } from '@angular/core';

@Component({
	selector: 'app-shared',
	template: `
		<p>ce composant utilise {{'SHARED_0' | translate}}</p>
	`,
	styles: []
})
export class SharedComponent {
}
