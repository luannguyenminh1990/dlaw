import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavParServiceProvider } from '../../providers/nav-par-service/nav-par-service';
import { RestProvider } from '../../providers/rest/rest';
import { LocalProvider } from '../../providers/local/local';
import {iUser} from '../interfaces/user.interface';
/**
 * Generated class for the HoiDapChiTietPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hoi-dap-chi-tiet',
  templateUrl: 'hoi-dap-chi-tiet.html',
})
export class HoiDapChiTietPage {

  KIENTHUC: any;
  COMMENTS: any=[];
  USER: iUser=null;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private navParService: NavParServiceProvider,
    private dlawService: RestProvider,
    private localService: LocalProvider,
  
    ) {
  }
  ngOnInit() {
    this.KIENTHUC=this.navParService.getter();
    console.log(this.KIENTHUC);
    this.getComment(this.KIENTHUC.ma_kien_thuc);
    this.USER=this.localService.USER;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoiDapChiTietPage');
  }

  getComment(ID)
  {
    this.dlawService.getComment(ID)
    .subscribe((result)=>{
      this.COMMENTS = result;
      console.log(result);
    })
  }

  themBinhLuan(noidung: string, makienthuc: string){
    this.dlawService.themBinhLuan(noidung,makienthuc)
    .subscribe((result)=>{
      this.COMMENTS = result;
      console.log(result);
      this.navCtrl.push('HoiDapPage');
    })
  }

  loginToComment(){
    this.navCtrl.push('LoginPage');
  }

}
