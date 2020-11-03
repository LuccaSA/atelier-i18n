import { Inject, InjectionToken, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export const LU_TRANSLATION_URLS = new InjectionToken<string>('LU_TRANSLATIONS');
export const LU_PARENT_TRANSLATION_URLS = new InjectionToken<string>('LU_PARENT_TRANSLATIONS');

@NgModule({
  imports: [
    TranslateModule
  ],
})
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

  public constructor(
    translateService: TranslateService,
    @Inject(LOCALE_ID) locale: string
    ) {
    console.log('LuTranslationUrlsModule', locale);
    translateService.use(locale.replace(/\-.*$/, ''));
  }

}
