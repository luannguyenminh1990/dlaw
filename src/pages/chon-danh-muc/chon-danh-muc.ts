import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { RemovehtmltagsPipe } from '../../pipes/removehtmltags/removehtmltags';
import { NavParServiceProvider } from '../../providers/nav-par-service/nav-par-service';

/**
 * Generated class for the ChonDanhMucPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chon-danh-muc',
  templateUrl: 'chon-danh-muc.html',
})
export class ChonDanhMucPage {

  KIENTHUCS:any = [];
  DANHMUCS:any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dlawService: RestProvider,
    private removehtmltag:RemovehtmltagsPipe,
    private navParService:NavParServiceProvider,
    private alertCtrl: AlertController
    
    ) {
  }
  ngOnInit() {
    this.getDanhMuc();
    
    //this.presentAlert("HEADER", "SUBTITLE", "MSG", 'OK')
    //this.getKienThuc();
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

  getDanhMuc()
  {
    this.dlawService.getDanhMuc()
    .subscribe((result)=>{
      this.DANHMUCS = result;

      this.doRadio(this.DANHMUCS);
      console.log(result);
    })
  }
  getKienThuc(mkt: string)
  {
    this.dlawService.getKienThuc(mkt)
    .subscribe((result)=>{
      this.KIENTHUCS = result;
      console.log(result);
    })
  }

  async presentAlert(HEADER, SUBTITLE, MSG, BTN) {
    const alert = await this.alertCtrl.create({
      //header: HEADER,
      //subHeader: SUBTITLE,
      message: MSG,
      buttons: [BTN]
    });

    await alert.present();
  }

  doRadio(DanhMucs: any[]) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Chọn Loại Danh Mục');

    DanhMucs.forEach(element => {
      alert.addInput({type: 'radio', label: element.ten_danh_muc, value: element.ma_danh_muc});
    });
    //alert.addInput({type: 'radio', label: '1', value: '1', checked: true});
    
    //alert.addInput({type: 'radio', label: '3', value: '3'});
    //alert.addInput({type: 'radio', label: '4', value: '4'});

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('Site:', data);
        this.getKienThuc(data);
      }
    });
    alert.present();
  }


}
