import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSetting } from './app.setting';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getDishes() {
    return this.http.get(`${AppSetting.BASE_URL}dishes`)
      .map(response => response.json());
  }

  getDish(id: number) {
    return this.http.get(`${AppSetting.BASE_URL}dishes/${id}`)
      .map(response => response.json());
  }

  getPromotion(id: number) {
    return this.http.get(`${AppSetting.BASE_URL}promotions/${id}`)
      .map(response => response.json());
  }

  getLeadership() {
    return this.http.get(`${AppSetting.BASE_URL}leadership`)
      .map(response => response.json());
  }

  getLeader(id: number) {
    return this.http.get(`${AppSetting.BASE_URL}leadership/${id}`)
      .map(response => response.json());
  }
  
}