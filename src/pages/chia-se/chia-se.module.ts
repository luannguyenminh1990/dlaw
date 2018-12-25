import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChiaSePage } from './chia-se';

@NgModule({
  declarations: [
    ChiaSePage,
  ],
  imports: [
    IonicPageModule.forChild(ChiaSePage),
  ],
})
export class ChiaSePageModule {}
