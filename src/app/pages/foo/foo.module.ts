import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { LuTranslationUrlsModule } from '../../lu-translate/lu-translation-url.module';
import { FooComponent } from './foo.component';

const routes: Routes = [
  { path: '', component: FooComponent },
];

@NgModule({
  declarations: [
    FooComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    LuTranslationUrlsModule.forChild(['/assets/i18n/i18n.foo.{{lang}}.json']),
    SharedModule,
  ]
})
export class FooModule { }
