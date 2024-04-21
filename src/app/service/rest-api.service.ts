import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private _http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${this.common.getToken()}`
    })
  };

  ///============ DEV ===========
  API = 'http://127.0.0.1:7000/api'
  IMG_API = 'http://127.0.0.1:7000/'

  ///============ PROD ===========
  // API = 'http://127.0.0.1:7000/api'


  uploadImage(data: any) {
    return this._http.post(this.API + '/v1/productimageupload', data);
  }

  addNewProduct(data: any) {
    return this._http.post(this.API + '/v1/addNewProduct', data, this.httpOptions);
  }

  getCategoryList(data: any) {
    return this._http.post(this.API + '/v1/getAllCategory', data, this.httpOptions);
  }

  getAllProductList(data: any) {
    return this._http.post(this.API + '/v1/getAllProducts', data, this.httpOptions);
  }
}
