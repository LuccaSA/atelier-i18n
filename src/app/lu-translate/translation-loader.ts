import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LU_PARENT_TRANSLATION_URLS, LU_TRANSLATION_URLS } from './lu-translation-url.module';

@Injectable()
export class LuTranslationsLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    @Optional() @Inject(LU_PARENT_TRANSLATION_URLS) private parentTranslationUrls?: string[],
    @Optional() @Inject(LU_TRANSLATION_URLS) private translationUrls?: string[],
  ) { }

  public getTranslation(lang: string): Observable<object> {
    console.log('getTranslation', lang);
    if (this.parentTranslationUrls) {
      console.log('parent', this.parentTranslationUrls);
    }
    if (this.translationUrls) {
      console.log('child', this.translationUrls);
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