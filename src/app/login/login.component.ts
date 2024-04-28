import { Component } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userPhone: string = "";
  userPass: string = "";

  constructor(private _rest: RestApiService, private _notifierSerVice: NotifierService, private _router: Router) { }


  userSignIn() {


    if (this.userPhone == "" || this.userPhone == null || this.userPhone == undefined) {
      this._notifierSerVice.notify('error', "Enter phone number");
      return;
    }
    if (this.userPhone.length < 10) {
      this._notifierSerVice.notify('error', "Invalid phone number");
      return;
    }
    if (this.userPass == "" || this.userPass == null || this.userPass == undefined) {
      this._notifierSerVice.notify('error', "Enter password");
      return;
    }

    const reqPayload = {
      "userPhone": this.userPhone,
      "userPass": this.userPass
    }

    this._rest.userLoginV1(reqPayload).subscribe((res: any) => {
      if (res.status == 200 && res.response) {
        this._notifierSerVice.notify('success', res.message);
        localStorage.setItem("yeqtsadkdan", res.response.token);
        this._router.navigate(['/admindashboard/productconfig']);
      }
      else {
        this._notifierSerVice.notify('error', res.message);
      }
    })
  }


}
