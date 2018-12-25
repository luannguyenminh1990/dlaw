import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoiDapPage } from './hoi-dap';

@NgModule({
  declarations: [
    HoiDapPage,
  ],
  imports: [
    IonicPageModule.forChild(HoiDapPage),
  ],
})
export class HoiDapPageModule {}
