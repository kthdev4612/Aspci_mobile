import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannePageRoutingModule } from './scanne-routing.module';

import { ScannePage } from './scanne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ScannePage]
})
export class ScannePageModule {}
