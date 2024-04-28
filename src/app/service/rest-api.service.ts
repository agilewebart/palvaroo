import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private _http: HttpClient, private common: CommonService) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public httpOptions_2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.common.getToken()}`
    })
  };

  ///============ DEV ===========
  API = 'http://127.0.0.1:7000/api'
  IMG_API = 'http://127.0.0.1:7000/'

  ///============ PROD ===========
  // API = 'http://127.0.0.1:7000/api'


  //------------- LOGIN ----------------------
  userLoginV1(data: any) {
    return this._http.post(this.API + '/v1/loginuser', data, this.httpOptions);
  }

  //------------- ADMIN ROUTES ------------------
  uploadImage(data: any) {
    return this._http.post(this.API + '/v1/productimageupload', data);
  }

  addNewProduct(data: any) {
    console.log("----------> ",this.httpOptions_2)
    return this._http.post(this.API + '/v1/addNewProduct', data, this.httpOptions_2);
  }

  updateProduct(data: any) {
    return this._http.post(this.API + '/v1/updateProduct', data, this.httpOptions_2);
  }

  deleteProduct(data: any) {
    return this._http.post(this.API + '/v1/deleteProduct', data, this.httpOptions_2);
  }
  //------------- ADMIN ROUTES END------------------


  getCategoryList(data: any) {
    return this._http.post(this.API + '/v1/getAllCategory', data, this.httpOptions);
  }

  getAllProductList(data: any) {
    return this._http.post(this.API + '/v1/getAllProducts', data, this.httpOptions);
  }

  sendEmail(data: any): Observable<any> {
    return this._http.post(this.API + '/v1/sendmail', data, this.httpOptions);
  }
}
