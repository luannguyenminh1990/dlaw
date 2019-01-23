import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { NavParServiceProvider } from '../../providers/nav-par-service/nav-par-service';
import { RestProvider } from '../../providers/rest/rest';
import { DlawService } from '../services/dlaw.service';

/**
 * Generated class for the ChiaSeChiTietPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chia-se-chi-tiet',
  templateUrl: 'chia-se-chi-tiet.html',
})
export class ChiaSeChiTietPage {
  KIENTHUC: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private navParService: NavParServiceProvider,
    private dlawService: RestProvider,
    private toastCtrl: ToastController
  
    ) {
  }
  ngOnInit() {
    this.KIENTHUC=this.navParService.getter();
    console.log(this.KIENTHUC);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChiaSeChiTietPage');
  }

  like(){
    this.dlawService.addLike(this.KIENTHUC.ma_kien_thuc)
    .subscribe((results)=>{
      console.log(results);
      //if(results.result == 1)
      this.presentToast("Đã thích thành công!");
    })
  }

  presentToast(ms:any) {
    let toast = this.toastCtrl.create({
      message: '' + ms,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
