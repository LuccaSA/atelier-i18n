import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrincipalInitializer } from './principal.initializer';
import { HttpClient } from '@angular/common/http';
import { IPrincipal } from './principal.interface';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

const bogusPrincipal: IPrincipal = {
	id: 12,
	name:  'sponge bob squarepants',
	firstName: 'sponge bob',
	lastName: 'squarepants',
	culture: {
		id: 1,
		code: 'fr-FR',
		name: 'francais',
	},
	mail: 'spongebob@bikini-bottom.com',
};
const bogusApiResponse = { data: bogusPrincipal };


describe('PrincipalInitializer', () => {
	let initializer: PrincipalInitializer;
	let http: HttpClient;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				PrincipalInitializer,
			],
		});
		initializer = TestBed.inject(PrincipalInitializer);
		http = TestBed.inject(HttpClient);
	});

	describe('initPrincipal', () => {
		it('should call http.get', () => {
			spyOn(http, 'get').and.returnValue(of(bogusApiResponse).pipe(delay(1)));

			initializer.initPrincipal();

			expect(http.get).toHaveBeenCalled();
		});
		it('should resolve when http.get resolves', async () => {
			spyOn(http, 'get').and.returnValue(of(bogusApiResponse).pipe(delay(1)));

			await initializer.initPrincipal();
		
			// need a synchronous assert
			expect(true).toBeTruthy();
		});
		it('should call this.reconnect when http.get throws', async () => {
			spyOn(http, 'get').and.returnValue(throwError({}));
			spyOn(initializer, 'reconnect').and.returnValue(null);

			await initializer.initPrincipal()

			expect(initializer.reconnect).toHaveBeenCalled();
		});
		it('should set this.principal when http.get resolves', async () => {
			spyOn(http, 'get').and.returnValue(of(bogusApiResponse).pipe(delay(1)));

			await initializer.initPrincipal();

			expect(initializer.principal).toEqual(bogusPrincipal);
			expect(initializer.cultureCode).toEqual(bogusPrincipal.culture.code);
		});
	});
});
