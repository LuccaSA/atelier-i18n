# atelier-i18n
sandbox pour l'atelier i18n du 14 octobre 2020 de la guilde front

## Fichiers de traduction

### Étape 1 : un gros fichier de traduction

Le fichier `src/app/i18n/translations.ts` contient les clés de traductions de toutes les langues et de tous les modules.
Il existe aussi en JSON dans `src/assets/i18n/i18n.json`.

### Étape 2 : lazy-loading

Les fichiers suivantes contiennent les clés de traductions de toutes les langues, par module :
* `src/app/i18n/common/translations.ts`
* `src/app/pages/foo/translations.ts`
* `src/app/pages/bar/translations.ts`

Ils existent aussi en JSON :
* `src/assets/i18n/i18n.common.json`
* `src/assets/i18n/i18n.foo.json`
* `src/assets/i18n/i18n.bar.json`

### Étape 2 (alternative) : par locale

Les fichiers suivantes contiennent les clés de traductions de tous les modules, par langue :
* `src/app/i18n/translations.de.ts`
* `src/app/i18n/translations.en.ts`
* `src/app/i18n/translations.es.ts`
* `src/app/i18n/translations.fr.ts`
* `src/app/i18n/translations.it.ts`
* `src/app/i18n/translations.nl.ts`
* `src/app/i18n/translations.pt.ts`

Ils existent aussi en JSON :
* `src/assets/i18n/i18n.de.json`
* `src/assets/i18n/i18n.en.json`
* `src/assets/i18n/i18n.es.json`
* `src/assets/i18n/i18n.fr.json`
* `src/assets/i18n/i18n.it.json`
* `src/assets/i18n/i18n.nl.json`
* `src/assets/i18n/i18n.pt.json`

### Étape 3 : par locale + lazy-loading

Voici les différents fichiers :
* `src/app/i18n/common/translations.de.ts`
* `src/app/i18n/common/translations.en.ts`
* `src/app/i18n/common/translations.es.ts`
* `src/app/i18n/common/translations.fr.ts`
* `src/app/i18n/common/translations.it.ts`
* `src/app/i18n/common/translations.nl.ts`
* `src/app/i18n/common/translations.pt.ts`
* `src/app/pages/foo/translations.de.ts`
* `src/app/pages/foo/translations.en.ts`
* `src/app/pages/foo/translations.es.ts`
* `src/app/pages/foo/translations.fr.ts`
* `src/app/pages/foo/translations.it.ts`
* `src/app/pages/foo/translations.nl.ts`
* `src/app/pages/foo/translations.pt.ts`
* `src/app/pages/bar/translations.de.ts`
* `src/app/pages/bar/translations.en.ts`
* `src/app/pages/bar/translations.es.ts`
* `src/app/pages/bar/translations.fr.ts`
* `src/app/pages/bar/translations.it.ts`
* `src/app/pages/bar/translations.nl.ts`
* `src/app/pages/bar/translations.pt.ts`

Pour la version JSON :
* `src/assets/i18n/i18n.common.de.json`
* `src/assets/i18n/i18n.common.en.json`
* `src/assets/i18n/i18n.common.es.json`
* `src/assets/i18n/i18n.common.fr.json`
* `src/assets/i18n/i18n.common.it.json`
* `src/assets/i18n/i18n.common.nl.json`
* `src/assets/i18n/i18n.common.pt.json`
* `src/assets/i18n/i18n.foo.de.json`
* `src/assets/i18n/i18n.foo.en.json`
* `src/assets/i18n/i18n.foo.es.json`
* `src/assets/i18n/i18n.foo.fr.json`
* `src/assets/i18n/i18n.foo.it.json`
* `src/assets/i18n/i18n.foo.nl.json`
* `src/assets/i18n/i18n.foo.pt.json`
* `src/assets/i18n/i18n.bar.de.json`
* `src/assets/i18n/i18n.bar.en.json`
* `src/assets/i18n/i18n.bar.es.json`
* `src/assets/i18n/i18n.bar.fr.json`
* `src/assets/i18n/i18n.bar.it.json`
* `src/assets/i18n/i18n.bar.nl.json`
* `src/assets/i18n/i18n.bar.pt.json`