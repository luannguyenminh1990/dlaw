import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import {iUser} from '../../pages/interfaces/user.interface'

/*
  Generated class for the LocalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalProvider {
  loading: any;
    count: number = 0;
    LOCATIONTYPES = [];
    isLoading: boolean = false;
    constructor(
        private loadingCtrl: LoadingController,
        // private navCtrl: NavController
    ) { }

    USER: iUser = null;
    USER_DEFAULT: iUser = {
      username: '',
      password: '',
      fullname: '',
      birthday: '',
      gender: '',
      address: '',
      email: '',
      unit: '',
      image: '',
      telephone: '',
      change_info: '0',
      role: '0'
    }

}
