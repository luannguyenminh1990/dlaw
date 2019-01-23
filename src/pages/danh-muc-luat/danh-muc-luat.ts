import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DlawService } from '../services/dlaw.service';
import { RestProvider } from '../../providers/rest/rest';
import { RemovehtmltagsPipe } from '../../pipes/removehtmltags/removehtmltags';
import { NavParServiceProvider } from '../../providers/nav-par-service/nav-par-service';

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
  KIENTHUCS:any = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dlawService: RestProvider,
    private removehtmltag:RemovehtmltagsPipe,
    private navParService:NavParServiceProvider
    
    ) {
  }
  ngOnInit() {
    this.getKienThuc();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DanhMucLuatPage');
  }

  ViewDetails(KIENTHUC){
    //this.KIENTHUC = KIENTHUC;
    console.log(KIENTHUC);
    this.navParService.setter(KIENTHUC);
    this.navCtrl.push('ChiTietLuatPage');
  }
  strip(html: string) {
    return html.replace(/<(?:.|\n)*?>/gm, '');
  }
  
  br2nl(html: string) {
    return html.replace(/<br( \/|\/|)>/gm, '\r\n');
  }

  getKienThuc()
  {
    this.dlawService.getKienThuc(0)
    .subscribe((result)=>{
      this.KIENTHUCS = result;
      console.log(result);
    })
  }

}
