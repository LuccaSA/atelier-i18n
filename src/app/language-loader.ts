import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, LOCALE_ID, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const LU_TRANSLATION_URLS = new InjectionToken<string>('LU_TRANSLATIONS');
export const LU_PARENT_TRANSLATION_URLS = new InjectionToken<string>('LU_PARENT_TRANSLATIONS');

@NgModule()
export class LuTranslationUrlsModule {

  static forRoot(urls: string[]): ModuleWithProviders<LuTranslationUrlsModule> {
    return {
      ngModule: LuTranslationUrlsModule,
      providers: [
        { provide: LU_PARENT_TRANSLATION_URLS, useValue: urls },
      ]
    };
  }

  static forChild(urls: string[]): ModuleWithProviders<LuTranslationUrlsModule> {
    return {
      ngModule: LuTranslationUrlsModule,
      providers: [
        { provide: LU_TRANSLATION_URLS, useValue: urls },
      ]
    };
  }
}

@Injectable()
export class LuTranslationsLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) locale: string,
    @Optional() @Inject(LU_PARENT_TRANSLATION_URLS) private parentTranslationUrls?: string[],
    @Optional() @Inject(LU_TRANSLATION_URLS) private translationUrls?: string[],
  ) {
    console.log(`LuTranslationsLoader`, locale);
    // this.getTranslation()
  }

  public getTranslation(lang: string): Observable<object> {
    console.log('getTranslation');
    if (this.parentTranslationUrls) {
      console.log('parent');
    }
    if (this.translationUrls) {
      console.log('child');
    }
    const parentAndChildArrays = [
      ...(this.parentTranslationUrls ?? []),
      ...(this.translationUrls ?? [])
    ];

    const arrayTrad = parentAndChildArrays
    return forkJoin(
        arrayTrad
        .map(url => this.http.get(url.replace('{{lang}}', lang)))
    ).pipe(
			map(list => list.reduce(
        (memo, iterator) =>
        ({
          ...memo,
          ...iterator
        }),
        {})
      )
    )
  }
}