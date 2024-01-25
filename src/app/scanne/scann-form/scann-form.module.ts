import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannFormPageRoutingModule } from './scann-form-routing.module';

import { ScannFormPage } from './scann-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ScannFormPage]
})
export class ScannFormPageModule {}
