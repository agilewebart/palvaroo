import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor() { }

  public options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${this.common.getToken()}`
    })
  };
}
