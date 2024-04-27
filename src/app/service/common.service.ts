import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  pageLimitDropDownAdmin: any = [
    {
      value: 15,
      label: '15'
    },
    {
      value: 30,
      label: '30'
    },
    {
      value: 60,
      label: '60'
    },
  ]

  pageLimitDropDownClient: any = [
    {
      value: 10,
      label: '10'
    },
    {
      value: 20,
      label: '20'
    },
    {
      value: 40,
      label: '40'
    },
  ]


  getStartLimit(data: any): any {
    if (data == 'admin')
      return 15;
    else
      return 10;
  }


  getToken(): any {
    const getTokenFromLocal = localStorage.getItem('yeqtsadkdan');
    if (getTokenFromLocal) {
      return getTokenFromLocal;
    } 
    else {
      return null
    }
  }

}
