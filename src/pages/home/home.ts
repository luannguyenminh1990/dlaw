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
      this.navCtrl.push('DanhMucLuatPage');
  }
  HoiDap(){
    this.navCtrl.push('HoiDapPage');
  }
  ChiaSe(){
    this.navCtrl.push('ChiaSePage');
  }
}
