import { Injectable } from '@angular/core';
import { IPrincipal } from './principal.interface';

const PRINCIPAL_KEY = 'lucca-principal-value';
const EXPIRATION_KEY = 'lucca-principal-expiration';
const EXPIRATION_DELTA_MS = 60 * 1000;

@Injectable()
export class PrincipalCache {

	get(): IPrincipal | null {
		const cachedPrincipalRaw = localStorage.getItem(PRINCIPAL_KEY);
		const expirationRaw = localStorage.getItem(EXPIRATION_KEY);
		if (!cachedPrincipalRaw || !expirationRaw) {
			return null;
		}

		const expirationDate = new Date(expirationRaw);
		const now = new Date();
		const delta = now.getTime() - expirationDate.getTime();

		if (delta > EXPIRATION_DELTA_MS) {
			this.reset();
			return null;
		}

		const cachedPrincipal = JSON.parse(cachedPrincipalRaw) as IPrincipal;
		return cachedPrincipal;
	}
	set(principal: IPrincipal): void {
		if (!principal) { return; }
		localStorage.setItem(PRINCIPAL_KEY, JSON.stringify(principal));
		localStorage.setItem(EXPIRATION_KEY, new Date().toISOString());
	}

	reset(): void {
		localStorage.removeItem(PRINCIPAL_KEY);
		localStorage.removeItem(EXPIRATION_KEY);
	}
}
