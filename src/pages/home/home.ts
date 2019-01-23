import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  ngOnInit() {
    //this.checkIfSigned();
  }
  KienThuc(){
      this.navCtrl.setRoot('DanhMucLuatPage');
  }
  HoiDap(){
    this.navCtrl.setRoot('HoiDapPage');
  }
  ChiaSe(){
    this.navCtrl.setRoot('ChiaSePage');
  }
}
