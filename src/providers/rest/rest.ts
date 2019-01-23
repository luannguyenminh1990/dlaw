import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  WSURL = 'http://khuyettat.vn/service/service.php?action=';
  constructor(public httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  login(UserName, PassWord) {
    let url = this.WSURL + 'login&email='+ UserName + '&password=' + PassWord;
    console.log(url);
    return this.httpClient.get(url)
  }
  register(email, pw, fullname)
  {
    let url = this.WSURL + 'insert&username='+ email + '&password=' + pw + '&fullname=' + fullname;
    console.log(url);
    return this.httpClient.get(url)
  }

  getDanhMuc() {
    let url = this.WSURL + 'getalldanhmuc';
    return this.httpClient.get(url)
  }

  getKienThuc(MaKienThuc) {
    let url = this.WSURL + 'getallkienthuc&ma_danh_muc=' + MaKienThuc;
    return this.httpClient.get(url)
  }

  getChiaSe() {
    let url = this.WSURL + 'getallchiase';
    return this.httpClient.get(url)
  }

  addChiaSe(tieude:string, noidung:string) {
    let url = this.WSURL + 'insertchiase&cau_hoi='+tieude + '&noi_dung_chi_tiet='+ noidung;
    return this.httpClient.get(url)
  }

  addHoiDap(tieude:string, noidung:string) {
    let url = this.WSURL + 'inserthoidap&cau_hoi='+tieude + '&noi_dung_chi_tiet='+ noidung;
    return this.httpClient.get(url)
  }

  getHoiDap() {
    let url = this.WSURL + 'getallhoidap';
    return this.httpClient.get(url)
  }

  getComment(ID) {
    let url = this.WSURL + 'getallcomment&id=' + ID;
    return this.httpClient.get(url)
  }
  themBinhLuan(noidung: string, makienthuc: string){
    let idUser=32;
    let ngay_cap_nhat='2019-01-20'
    let url = this.WSURL + 'insertcomment&makienthuc=' + makienthuc + '&noidung=' + noidung + '&id_nguoi_dung=' + idUser + '&ngay_cap_nhat=' + ngay_cap_nhat;
    return this.httpClient.get(url)
  }

  addLike(id: string) {
    let url = this.WSURL + 'like&id='+id;
    return this.httpClient.get(url)
  }
}
