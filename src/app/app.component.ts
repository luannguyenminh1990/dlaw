import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DanhMucLuatPage } from '../pages/danh-muc-luat/danh-muc-luat';
import { HoiDapPage } from '../pages/hoi-dap/hoi-dap';
import { ChiaSePage } from '../pages/chia-se/chia-se';

@Component({
  templateUrl: 'app.html'
  //selector: 'app-root',
  //templateUrl: 'app.html'
})
export class MyApp {
 /* public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'DanhMucLuat', url: '/danh-muc-luat', icon: 'home' },
    { title: 'HoiDap', url: '/hoi-dap', icon: 'home' },
    { title: 'Chia Sẻ', url: '/chia-se', icon: 'home' },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  menuOpen(){
    console.log('menuOpen');
    // this.isSigned = this.localService.ACCOUNT.isSigned;
    setTimeout(() => {
      //this.isSigned = this.authService.isSigned()
    }, 500);
  }
*/
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, url: string, name: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    )
     {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', url: '/home', name: 'HomePage' },
      { title: 'Danh Mục Luật', url: '/danh-muc-luat', name: 'DanhMucLuatPage' },
      { title: 'Hỏi Đáp', url: '/hoi-dap', name: 'HoiDapPage' },
      { title: 'Chia Sẻ', url: '/chia-se', name: 'ChiaSePage' },
      { title: 'Chọn Danh Mục', url: '/chon-danh-muc', name: 'ChonDanhMucPage' },
      { title: 'Đăng Nhập', url: '/login', name: 'LoginPage' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
   //this.nav.push(page.component);
   this.nav.setRoot(page.name);
  }
  
}
