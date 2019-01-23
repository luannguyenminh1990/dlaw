import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { e, l } from '@angular/core/src/render3';
import { LocalProvider } from '../../providers/local/local';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isSignedIn = false;
  constructor(
    private navCtrl: NavController,
    private authService: RestProvider,
    private toastCtrl: ToastController,
    private localService: LocalProvider
  ) { }

  ngOnInit() {
    this.checkIfSigned();
  }

  checkIfSigned() {
    setTimeout(() => {
      //this.isSignedIn = this.authService.isSigned();
      console.log(this.isSignedIn);
    }, 1000);
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

  // Login with username, password
  login(email: string, pw: string) {
    console.log(email, pw);
    this.authService.login(email, pw)
      .subscribe((res: any) => {
        console.log(res);
        if(res.result=="1")
        {
          this.localService.USER = res;
          console.log("Đăng nhập thành công");
          this.presentToast("Đăng nhập thành công");
          this.navCtrl.push('DanhMucLuatPage');
          //this.navCtrl.setRoot('HomePage');
          //this.navCtrl.pop();
        }
        else
        {
          console.log("Đăng nhập thất bại");
          this.presentToast("Đăng nhập thất bại");
        }
      })
  }
  dangky(){
    this.navCtrl.setRoot('RegisterPage');
  }
  quenmatkhau(){
    //this.navCtrl.setRoot('RegisterPage');
    this.presentToast("Chức năng đang cập nhật");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
