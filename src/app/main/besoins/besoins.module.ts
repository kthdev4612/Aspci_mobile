import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BesoinsPageRoutingModule } from './besoins-routing.module';

import { BesoinsPage } from './besoins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BesoinsPageRoutingModule
  ],
  declarations: [BesoinsPage]
})
export class BesoinsPageModule {}
