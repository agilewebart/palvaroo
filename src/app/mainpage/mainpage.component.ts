import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from '../service/rest-api.service';
import { NotifierService } from 'angular-notifier';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isCross: boolean = false;
  activatedRoute !: ActivatedRoute;
  someProductsArr: any[] = [];
  showProductImgUrl: string = "";

  contactForm!: FormGroup;

  ourServiceArr: any[] = [
    {
      title: 'Product development for 3 phase locomotive'
    },
    {
      title: 'Tendering service for PSU and IR'
    },
    {
      title: 'Order to cash management'
    },

  ]

  constructor(private _router: Router, private _activeRoute: ActivatedRoute, private _rest: RestApiService, private notifier: NotifierService) {

  }



  ngOnInit(): void {
    this.initializeContactForm();
    this._activeRoute.fragment.subscribe((res: any) => {
      this.jumpToSpecificSection(res);
    })
    this.showProductImgUrl = this._rest.IMG_API;
    this.getProducts();
  }

  //------------ Go to this page ------------
  jumpToSpecificSection(fragment: any) {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' })
  }


  //------------------- Toggler hamburger-----------------
  hamBurger() {
    this.isCross = true;
  }
  cross() {
    this.isCross = false;
  }




  //----------------- Load all products ----------------------
  getProducts() {
    const reqPayload = {
      "limit": 10,
      "offset": 0,
      "globalSearch": "",
      "categorySearchId": "",
      // "userType": ""
    }

    this._rest.getAllProductsClient(reqPayload).subscribe((res: any) => {
      if (res.status == 200)
        this.someProductsArr = res.response;
      else
        this.notifier.notify('error', "Faild to load products")
    })
  }




  //============================ Contact form Section ========================
  initializeContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      message: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    })
  }


  //==================== Submit contact form ================
  onSubmit() {

    let contactValue = this.contactForm.value;
    const reqPayload = {
      "name": contactValue.name,
      "email": contactValue.email,
      "phone": contactValue.phone,
      "product": "NA",
      "message": contactValue.message
    }

    console.log("---------->>", reqPayload)
    this._rest.sendEmail(reqPayload).subscribe((res: any) => {
      console.log("---------->>", res)
      if (res.status == 200) {
        this.notifier.notify('success', res.message);
        this.contactForm.reset();
      }
      else {
        this.notifier.notify('error', res.message)
      }
    })

  }


}
