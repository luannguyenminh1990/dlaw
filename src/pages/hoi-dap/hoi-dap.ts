import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { RemovehtmltagsPipe } from '../../pipes/removehtmltags/removehtmltags';
import { NavParServiceProvider } from '../../providers/nav-par-service/nav-par-service';

/**
 * Generated class for the HoiDapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hoi-dap',
  templateUrl: 'hoi-dap.html',
})
export class HoiDapPage {
  KIENTHUCS:any = [];
  KIENTHUCS_:any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dlawService: RestProvider,
    private removehtmltag:RemovehtmltagsPipe,
    private navParService:NavParServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoiDapPage');
  }

  
  
  ngOnInit() {
    this.getHoiDap();
  
  }
  ViewDetails(KIENTHUC){
    //this.KIENTHUC = KIENTHUC;
    console.log(KIENTHUC);
    this.navParService.setter(KIENTHUC);
    this.navCtrl.push('HoiDapChiTietPage');
  }
  strip(html: string) {
    return html.replace(/<(?:.|\n)*?>/gm, '');
  }
  
  br2nl(html: string) {
    return html.replace(/<br( \/|\/|)>/gm, '\r\n');
  }

  getHoiDap()
  {
    this.dlawService.getHoiDap()
    .subscribe((result)=>{
      this.KIENTHUCS = result;
      this.KIENTHUCS_ = result;
      console.log(result);
    })
  }

  search(e){
    console.log(e);
    let str = e.toLowerCase();
    console.log(str);
    if(str.length>0){
      this.KIENTHUCS = this.KIENTHUCS.filter(LOC => LOC.cau_hoi.toLowerCase().indexOf(str)>-1)
    }else{
      console.log('str = 0');
      this.KIENTHUCS = this.KIENTHUCS_; 
    }
  }

  addNew(){
    this.navCtrl.push('ThemHoiDapPage');
  }

}
