import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrincipal } from './principal.interface';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PrincipalCache } from './principal.cache';

export function initPrincipal(initializer: PrincipalInitializer): () => Promise<void> {
	return () => initializer.initPrincipal();
}
export function getPrincipal(initializer: PrincipalInitializer): IPrincipal {
	return initializer.principal;
}
export function getLocale(initializer: PrincipalInitializer ): string {
	return initializer.cultureCode;
}

@Injectable()
export class PrincipalInitializer {
	public principal: IPrincipal;
	public cultureCode: string = 'en-us';

	constructor(
		private _cache: PrincipalCache,
		private _http: HttpClient,
	) {}

	public initPrincipal(): Promise<void> {
		// check cache
		// if present - return cached value

		// else
		const principalUrl = `/api/v3/users/me?fields=id,firstName,lastName,name,mail,culture[id,code,name]`;

		return this._http.get<{ data: IPrincipal }>(principalUrl).pipe(
			tap(res=> {
				// update cache
				this.principal = res.data;
				this.cultureCode = res.data?.culture?.code;
			}),
			catchError(err => {
				this.reconnect();
				return of(null);
			}),
			mapTo(null),
		).toPromise();
	}

	public reconnect() {
		window.location.href = '/identity?returnUrl=' + encodeURIComponent(window.location.href);
	}
}