import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalModule } from '@lucca/principal';
import { AppComponent } from './app.component';
import { LuTranslationUrlsModule } from './lu-translate/lu-translation-url.module';

const routes: Routes = [
  { path: 'bar', loadChildren: () => import('./pages/bar').then(m => m.BarModule) },
  { path: 'foo', loadChildren: () => import('./pages/foo').then(m => m.FooModule) },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    PrincipalModule,
    LuTranslationUrlsModule.forRoot(['/assets/i18n/i18n.common.{{lang}}.json']),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
