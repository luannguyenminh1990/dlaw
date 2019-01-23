import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NavParServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavParServiceProvider {
  myParam: any;
  constructor() { }

  getter(){
    return this.myParam;
  }

  setter(param){
    this.myParam = param;
  }

}
