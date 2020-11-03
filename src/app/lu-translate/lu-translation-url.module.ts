import { Inject, InjectionToken, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { PrincipalModule } from '@lucca/principal';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export const LU_TRANSLATION_URLS = new InjectionToken<string>('LU_TRANSLATIONS');
export const LU_PARENT_TRANSLATION_URLS = new InjectionToken<string>('LU_PARENT_TRANSLATIONS');

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

@NgModule()
export class LuTranslationUrlsParentModule {

  public constructor(
    ) {
    console.log('LuTranslationUrlsParentModule');
  }
}

@NgModule()
export class LuTranslationUrlsChildModule {

  public constructor(
    translateService: TranslateService,
    @Inject(LOCALE_ID) locale: string
    ) {
    console.log('LuTranslationUrlsChildModule', locale);
    translateService.use(locale.replace(/\-.*$/, ''));
  }
}
