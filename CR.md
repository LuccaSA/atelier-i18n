# CR Transloco

* très rapide à mettre en place (schematic)
* lazy-loading + split par langue super simple
* on utilise des fichiers json quio est plus simple à manipuler que des imports dynamiques avec Webpack

## Limitation

* il faut écrire le scope devant les clés de trads (sauf les commons)
  * mais c'est cool niveau perfs

`<div transloco="bar.BAR_5"></div>`

flashing

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
