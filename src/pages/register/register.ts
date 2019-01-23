import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  isSignedIn = false;
  constructor(
    private navCtrl: NavController,
    private authService: RestProvider,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.checkIfSigned();
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


  checkIfSigned() {
    setTimeout(() => {
      //this.isSignedIn = this.authService.isSigned();
      console.log(this.isSignedIn);
    }, 1000);
  }

  // register with username, password, full name
  register(email: string, pw: string, fullname: string) {
    console.log(email, pw, fullname);
    this.authService.register(email, pw, fullname)
      .subscribe((res: any) => {
        console.log(res);
        if(res.result=="1")
        {
          console.log("Đăng ký thành công");
          this.presentToast("Đăng ký thành công");
          this.navCtrl.push('DanhMucLuatPage');
        }
        else
        {
          console.log("Đăng ký thất bại");
          this.presentToast("Đăng ký thất bại");
        }
      })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


}
