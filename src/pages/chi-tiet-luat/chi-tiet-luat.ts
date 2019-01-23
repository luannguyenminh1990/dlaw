import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavParServiceProvider } from '../../providers/nav-par-service/nav-par-service';

/**
 * Generated class for the ChiTietLuatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chi-tiet-luat',
  templateUrl: 'chi-tiet-luat.html',
})
export class ChiTietLuatPage {
  KIENTHUC: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private navParService: NavParServiceProvider
    ) {
  }
  ngOnInit() {
    this.KIENTHUC=this.navParService.getter();
    console.log(this.KIENTHUC);
    this.LoadComment();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChiTietLuatPage');
  }
  LoadComment()
  {

  }
}
