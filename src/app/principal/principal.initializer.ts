import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrincipal } from './principal.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PrincipalCache } from './principal.cache';

export function initPrincipal(initializer: PrincipalInitializer): () => Promise<IPrincipal> {
	return () => initializer.initPrincipal();
}
export function getPrincipal(initializer: PrincipalInitializer): IPrincipal {
	return initializer.principal;
}
export function getLocale(initializer: PrincipalInitializer): string {
	return initializer.cultureCode;
}

@Injectable()
export class PrincipalInitializer {
	public principal: IPrincipal;
	public cultureCode: string = 'en-us';

	constructor(
		private _cache: PrincipalCache,
		private _http: HttpClient,
	) { }

	public initPrincipal(): Promise<IPrincipal> {
		let cachedPrincipal = this._cache.get();

		if (cachedPrincipal != null) {
			this.principal = cachedPrincipal;
			this.cultureCode = cachedPrincipal.culture?.code;
			return of(cachedPrincipal).toPromise();
		}

		const principalUrl = `/api/v3/users/me?fields=id,firstName,lastName,name,mail,culture[id,code,name]`;

		return this._http.get<{ data: IPrincipal }>(principalUrl).pipe(
			map(res => res.data),
			tap(principal => {
				this.principal = principal;
				this.cultureCode = principal?.culture?.code;

				this._cache.set(principal);
			}),
			catchError(err => {
				this.reconnect();
				return of(null);
			}),
		).toPromise();
	}

	public reconnect() {
		window.location.href = '/identity?returnUrl=' + encodeURIComponent(window.location.href);
	}
}