import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DlawService } from '../pages/services/dlaw.service';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { RemovehtmltagsPipe } from '../pipes/removehtmltags/removehtmltags';
import { NavParServiceProvider } from '../providers/nav-par-service/nav-par-service';
import { DanhMucLuatPage } from '../pages/danh-muc-luat/danh-muc-luat';
import { HoiDapPage } from '../pages/hoi-dap/hoi-dap';
import { ChiaSePage } from '../pages/chia-se/chia-se';
import { LoginPage } from '../pages/login/login';
import { ServicesAuthProvider } from '../providers/services-auth/services-auth';
import { LocalProvider } from '../providers/local/local';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,
    //DanhMucLuatPage,
    //HoiDapPage,
    //ChiaSePage,
    //LoginPage
    //DlawService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage, 
    //DanhMucLuatPage,
    //HoiDapPage,
    //ChiaSePage,
    //LoginPage
    //DlawService
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RemovehtmltagsPipe,
    NavParServiceProvider,
    ServicesAuthProvider,
    LocalProvider
  ]
})
export class AppModule {}
