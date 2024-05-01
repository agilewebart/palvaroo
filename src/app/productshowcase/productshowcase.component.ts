import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RestApiService } from 'src/app/service/rest-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productshowcase',
  templateUrl: './productshowcase.component.html',
  styleUrls: ['./productshowcase.component.css']
})
export class ProductshowcaseComponent implements OnInit {

  @ViewChild('enquiryModal') enquiryModal: any;

  constructor(private _router: Router, private _common: CommonService, private _rest: RestApiService,
    private modalService: NgbModal,
    private notifier: NotifierService,
    private ngxLoader: NgxUiLoaderService) { }


  limit: number = 0;
  offset: number = 0;
  currentPage: number = 1;
  paginationDropDown: any[] = [];

  categoryList: any[] = [];
  getProdList: any[] = [];

  globalSearch: any = "";
  showProductImgUrl: string = "";
  searchproductCategoryid: string = "0";

  contactForm!: FormGroup;



  ngOnInit(): void {
    this.initializeContactForm();
    this.paginationDropDown = this._common.pageLimitDropDownClient;
    this.limit = this._common.getStartLimit("client");
    this.showProductImgUrl = this._rest.IMG_API;

    this.getCategoryList();
    this.getAllProducts();
  }


  //-------------------- Next Page -------------------
  nextPage() {
    //-------- Formula of next page to increase offset -----
    this.currentPage += 1;
    this.offset = this.limit * (this.currentPage - 1);
    this.getAllProducts();
  }

  //-------------------- Prev Page -------------------
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.offset = (this.currentPage - 1) * this.limit;
      this.getAllProducts();
    }
  }

  //--------------------- Change Limit --------------
  changeLimit(e: any) {
    this.offset = 0;
    this.currentPage = 1;
    this.getAllProducts()
  }


  getAllProducts() {
    this.ngxLoader.start();
    const reqPayload = {
      "limit": this.limit.toString() ? this.limit.toString() : "10",
      "offset": this.offset.toString() ? this.offset.toString() : "0",
      "globalSearch": this.globalSearch.toString(),
      "categorySearchId": this.searchproductCategoryid,

    }

    this._rest.getAllProductsClient(reqPayload).subscribe((res: any) => {
      this.ngxLoader.stop();
      if (res.status == 200)
        this.getProdList = res.response;
      else
        this.notifier.notify('error', res.message)

    })

  }


  //================== Category Search ============
  categorySearchfn() {
    this.getAllProducts();
  }
  // ============================ GET ALL CATEGORYLIST ===========================
  getCategoryList() {
    const reqPayload = {};
    this._rest.getCategoryList(reqPayload).subscribe((res: any) => {
      if (res.status == 200)
        this.categoryList = res.response;
      else
        this.notifier.notify('error', res.message)
    })
  }



  //============================ Contact form Section ========================
  initializeContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      prodName: new FormControl(null),
      message: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    })
  }

  contactModalOpen(prodName: any) {
    console.log("---_PP", prodName)
    this.contactForm.patchValue({
      prodName: prodName
    });
    this.modalService.open(this.enquiryModal, { size: 'md', backdrop: 'static', keyboard: false, centered: true })
  }

  //==================== Submit contact form ================
  onSubmit() {
    let contactValue = this.contactForm.value;
    const reqPayload = {
      "name": contactValue.name,
      "email": contactValue.email,
      "phone": contactValue.phone,
      "product": contactValue.prodName,
      "message": contactValue.message
    }

    console.log("---------->>", reqPayload)
    this._rest.sendEmail(reqPayload).subscribe((res: any) => {
      console.log("---------->>", res)
      if (res.status == 200) {
        this.notifier.notify('success', res.message);
        this.closeModal();
      }
      else {
        this.notifier.notify('error', res.message)
      }
    })
  }

  resetAll() {
    this.limit = 10;
    this.offset = 0;
    this.currentPage = 1;
    this.globalSearch = "";
    this.searchproductCategoryid = "0"
  }

  //======================== Modal dismiss =========================
  closeModal() {
    this.modalService.dismissAll();
    this.contactForm.reset();
  }
}
