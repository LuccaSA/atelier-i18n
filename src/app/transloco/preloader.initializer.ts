import { TranslocoService } from '@ngneat/transloco';

export function preloadInitializer(localeId: string, translocoService: TranslocoService) {
  return async () => {
    translocoService.setActiveLang(localeId.split('-')[0]);
    return translocoService.load(this.scope + '/' + translocoService.getActiveLang());
  }
}