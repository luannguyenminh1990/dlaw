import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class DlawService {
  WSURL = 'http://khuyettat.vn/service/service.php?action=';
  constructor(private httpClient: HttpClient) { }

  login(UserName, PassWord) {
    // let url = 'http://pegas-smart-app.enablecode.com.vn/pegas/PackageSearchOptions.php&GROUP=' + GROUP;
    let url = this.WSURL + 'login&email=UserName&password=PassWord';
    return this.httpClient.get(url)
  }

  getKienThuc(MaKienThuc) {
    // let url = 'http://pegas-smart-app.enablecode.com.vn/pegas/PackageSearchOptions.php&GROUP=' + GROUP;
    let url = this.WSURL + 'getallkienthuc&ma_danh_muc=MaKienThuc';
    return this.httpClient.get(url)
  }

  }