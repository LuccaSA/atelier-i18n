import { Injectable } from '@angular/core';
import { IPrincipal } from './principal.interface';

@Injectable()
export class PrincipalCache {
	get(): IPrincipal | null {
		return null;
	}
	set(principal: IPrincipal): void {

	}
}
