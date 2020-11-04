import { HttpClientModule } from '@angular/common/http';
import { Inject, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { PrincipalModule } from '@lucca/principal';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LuTranslationsLoader } from './translation-loader';
import { LU_PARENT_TRANSLATION_URLS, LU_TRANSLATION_URLS } from './translations.token';



@NgModule({
  imports: [
    PrincipalModule,
    TranslateModule
  ],
})
export class LuTranslationUrlsModule {

  static forRoot(urls: string[]): ModuleWithProviders<LuTranslationUrlsModule> {
    return {
      ngModule: LuTranslationUrlsParentModule,
      providers: [
        { provide: LU_PARENT_TRANSLATION_URLS, useValue: urls },
      ]
    };
  }

  static forChild(urls: string[]): ModuleWithProviders<LuTranslationUrlsModule> {
    return {
      ngModule: LuTranslationUrlsChildModule,
      providers: [
        { provide: LU_TRANSLATION_URLS, useValue: urls, multi: true },
      ]
    };
  }

  public constructor(
    translateService: TranslateService,
    @Inject(LOCALE_ID) locale: string
    ) {
    console.log('LuTranslationUrlsModule', locale);
    translateService.use(locale.replace(/\-.*$/, ''));
  }

}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: LuTranslationsLoader },
    }),
  ],
  exports: [
    TranslateModule,
  ],
})
export class LuTranslationUrlsParentModule {

  public constructor(
    ) {
    console.log('LuTranslationUrlsParentModule');
  }
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forChild({
      loader: {provide: TranslateLoader, useClass: LuTranslationsLoader},
      isolate: true,
    }),
  ],
  exports: [
    TranslateModule,
  ],
})
export class LuTranslationUrlsChildModule {

  public constructor(
    translateService: TranslateService,
    @Inject(LOCALE_ID) locale: string
    ) {
    console.log('LuTranslationUrlsChildModule', locale);
    translateService.use(locale.replace(/\-.*$/, ''));
  }
}
