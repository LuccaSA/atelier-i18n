import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { PrincipalCache } from './principal.cache';
import { getLocale, getPrincipal, initPrincipal, PrincipalInitializer } from './principal.initializer';
import { PRINCIPAL } from './principal.token';

@NgModule({
	imports: [
		HttpClientModule,
	],
	providers: [
		PrincipalInitializer,
		PrincipalCache,
		{ provide: APP_INITIALIZER, useFactory: initPrincipal, deps: [PrincipalInitializer], multi: true },
		{ provide: PRINCIPAL, useFactory: getPrincipal, deps: [PrincipalInitializer] },
		{ provide: LOCALE_ID, useFactory: getLocale, deps: [PrincipalInitializer] },
	],
})
export class PrincipalModule {}