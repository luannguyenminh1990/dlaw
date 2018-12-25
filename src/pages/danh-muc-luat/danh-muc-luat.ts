import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DanhMucLuatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-danh-muc-luat',
  templateUrl: 'danh-muc-luat.html',
})
export class DanhMucLuatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DanhMucLuatPage');
  }

  ViewDetails(){
    this.navCtrl.push('ChiTietLuatPage');
  }

}
