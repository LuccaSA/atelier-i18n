# CR Transloco

* très rapide à mettre en place (schematic)
* lazy-loading + split par langue super simple
* on utilise des fichiers json quio est plus simple à manipuler que des imports dynamiques avec Webpack

## Limitation

* il faut écrire le scope devant les clés de trads (sauf les commons)
  * mais c'est cool niveau perfs
  * contournable (trouvé par Thomas)

`<div transloco="bar.BAR_5"></div>`

* flashing (évitable via APP_INITIALIZER et Resolver pour les modules lazy-loadés)
* La traduction en mode synchrone avec le `TranslocoService` peut-être dangereuse : il faut que les traductions soient bien chargées avant ou traduire avec la méthode asynchrone

## Critères

Simplicité et élégance
=> Configuration simple et proche de l'existant
=> Lazy-loading de la bombe

Toolingability
=> Schematics pour l'installation
=> Extracteur de clés utilisées
=> Transloco Optimize (à voir)

Coût de migration de l’existant vers le nouveau
=> CLI qui fait pas mal de chose
=> il faut ajouter le scope devant le nom des clés

Taille des bundles générés
=> Taille raisonnable de la lib
=> Les trads sont dans des fichiers JSON

Impact IC
=> Aucun (sauf si Transloco Optimize)

Cible atteinte
=> Oh yeah !

## Mise en place

* `ng add @ngneat/transloco` qui ajoute la dépendance, le module, un loader de traduction par défaut
* Créer les fichiers de trads suivants sur Lokalise :

  * `front/%LANG_ISO%.json` pour les traductions communes
  * `front/foo/%LANG_ISO%.json` pour les traductions du module Foo
  * `front/bar/%LANG_ISO%.json` pour les traductions du module Bar

  > Il est possible d'avoir plusieurs clés avec le même nom tant que ces clés sont dans des fichiers différents.

* Dans le module Foo, importer `TranslocoModule` et ajouter un provider `{ provide: TRANSLOCO_SCOPE, useValue: 'foo' }`
* Dans le module Bar, importer `TranslocoModule` et ajouter un provider `{ provide: TRANSLOCO_SCOPE, useValue: 'bar' }`
