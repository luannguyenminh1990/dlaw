import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChonDanhMucPage } from './chon-danh-muc';

@NgModule({
  declarations: [
    ChonDanhMucPage,
  ],
  imports: [
    IonicPageModule.forChild(ChonDanhMucPage),
  ],
})
export class ChonDanhMucPageModule {}
