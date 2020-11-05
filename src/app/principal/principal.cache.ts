import { Injectable } from '@angular/core';
import { IPrincipal } from './principal.interface';

const PRINCIPAL_KEY = 'lucca-principal-value';
@Injectable()
export class PrincipalCache {

	get(): IPrincipal | null {
		const cachedPrincipalRaw = localStorage.getItem(PRINCIPAL_KEY);
		if (!cachedPrincipalRaw) {
			return null;
		}

		const cachedPrincipal = JSON.parse(cachedPrincipalRaw) as IPrincipal;
		return cachedPrincipal;
	}
	set(principal: IPrincipal): void {
		localStorage.setItem(PRINCIPAL_KEY, JSON.stringify(principal));
	}
}
