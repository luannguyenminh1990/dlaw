import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ThemHoiDapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-them-hoi-dap',
  templateUrl: 'them-hoi-dap.html',
})
export class ThemHoiDapPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private authService: RestProvider
    ) {
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
  ngOnInit() {
    this.presentToast("Chức năng đang được cập nhật");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemHoiDapPage');
  }

  ThemHoiDap(tieude:string, noidung: string)
  {
    this.authService.addHoiDap(tieude,noidung)
    .subscribe((res: any) => {
      console.log(res);
      if(res.result=="1")
      {
        console.log("Thêm thành công");
        this.presentToast("Thêm thành công");
        //this.navCtrl.push('DanhMucLuatPage');
        //this.navCtrl.setRoot('HomePage');
        //this.navCtrl.pop();
      }
      else
      {
        console.log("Đăng nhập thất bại");
        this.presentToast("Thêm thất bại");
      }
    })
  }
}
