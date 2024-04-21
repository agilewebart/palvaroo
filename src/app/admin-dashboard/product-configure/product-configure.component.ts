import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from 'src/app/service/common.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-product-configure',
  templateUrl: './product-configure.component.html',
  styleUrls: ['./product-configure.component.css']
})
export class ProductConfigureComponent implements OnInit {

  @ViewChild('addEditModal') addEditModal: any;

  productName: string = "";
  productPrice: string = "";
  productDesc: string = "";
  productCategory: number = 0;
  productFileName: string = "";

  showProductImgUrl: string = "";

  categoryList: any[] = [];
  getProdList: any[] = [];

  limit: number = 0;
  offset: number = 0;
  currentPage: number = 1;
  paginationDropDown: any[] = [];
  globalSearch: any = "";

  constructor(private _common: CommonService,
    private _rest: RestApiService,
    private modalService: NgbModal,
    private notifier: NotifierService,
    private ngxLoader: NgxUiLoaderService) { }
    

  ngOnInit(): void {
    // this.ngxLoader.start();
    // setTimeout(() => {
    //   this.ngxLoader.stop();
    // }, 2000)

    this.paginationDropDown = this._common.pageLimitDropDownAdmin;
    this.limit = this._common.getStartLimit("admin");

    console.log(this.paginationDropDown);
    console.log(this.limit)
    this.showProductImgUrl = this._rest.IMG_API;
    this.getCategoryList();
    this.getAllProducts();

  }


  //-------------------- Next Page -------------------
  nextPage() {
    //-------- Formula of next page to increase offset -----
    this.currentPage += 1;
    this.offset = this.limit * (this.currentPage - 1);
    console.log("===============>> ", this.offset)
    this.getAllProducts();
  }

  //-------------------- Prev Page -------------------
  prevPage() {

  }

  //--------------------- Change Limit --------------
  changeLimit(e: any) {
    this.limit = Number(e.target.value)
    console.log(this.limit)
  }



  //========================= GET ALL PRODUCT LIST =======================
  getAllProducts() {
    this.ngxLoader.start();

    const reqPayload = {
      "limit": this.limit ? this.limit : 15,
      // "limit": 1,
      "offset": this.offset ? this.offset : 0,
      "globalSearch": this.globalSearch,
      "categorySearch": this.productCategory,
      // "status": "1"
    }

    console.log("-------Res------?>> ", reqPayload)
    this._rest.getAllProductList(reqPayload).subscribe((res: any) => {
      console.log("-------Res------?>> ", res)
      this.ngxLoader.stop();
      if (res.status == 200)
        this.getProdList = res.response;
      else
        this.notifier.notify('error', res.message)
    })
  }


  //================== Category Search ============
  categorySearchfn() {

    console.log(this.productCategory);
  }


  //================== Global Search ============
  globalSearchfn() {
    console.log("+++> ", this.globalSearch)
  }

  //======================== UPLOAD PRODUCT IMAGE ===========================
  uploadFile() {
    const banner = document.getElementById('formFile') as HTMLInputElement;
    const file: any = banner.files;

    if (file.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = () => {
        const fileData = new FormData();
        fileData.append('file_name', file[0]);
        this._rest.uploadImage(fileData).subscribe((res: any) => {
          if (res.status == 200) {
            this.productFileName = res.response;
          } else {
            this.notifier.notify("error", res.message);
          }
        })
      }
    }
  }

  // ============================ ADD FORM ===========================
  onAddSubmit() {


    if (this.productName == "" || this.productName == null || this.productName == undefined) {
      this.notifier.notify("error", "Enter Product name");
      return;
    }
    if (this.productName.length > 20) {
      this.notifier.notify("error", "Product name must be under 20 char");
      return;
    }
    if (this.productPrice == "" || this.productPrice == null || this.productPrice == undefined) {
      this.notifier.notify("error", "Enter Product price");
      return;
    }
    if (this.productDesc == "" || this.productDesc == null || this.productDesc == undefined) {
      this.notifier.notify("error", "Enter Product description");
      return;
    }
    if (this.productDesc.length > 200) {
      this.notifier.notify("error", "Product description must be under 200 char");
      return;
    }
    if (this.productCategory == 0 || this.productCategory == null || this.productCategory == undefined) {
      this.notifier.notify("error", "Enter Product category");
      return;
    }

    if (this.productFileName == "" || this.productFileName == null || this.productFileName == undefined) {
      this.notifier.notify("error", "Enter Product image");
      return;
    }


    const reqPayload = {
      "pdName": this.productName,
      "pdCatId": this.productCategory,
      "pdDescription": this.productDesc,
      "pdPrice": this.productPrice,
      "pdImagename": this.productFileName
    }


    // console.log("-------Req------?>> ", reqPayload)
    this._rest.addNewProduct(reqPayload).subscribe((res: any) => {
      // console.log("-------Res------?>> ", res)
      if (res.status == 200) {
        this.notifier.notify('success', res.message);
        this.getAllProducts();

      }

      else
        this.notifier.notify('error', res.message)

    })


  }


  // ============================ GET ALL CATEGORYLIST ===========================
  getCategoryList() {
    const reqPayload = {};
    this._rest.getCategoryList(reqPayload).subscribe((res: any) => {
      // console.log(res)
      if (res.status == 200)
        this.categoryList = res.response;
      else
        this.notifier.notify('error', res.message)
    })
  }



  //========================= Edit Modal =====================
  openAddEditModal(addEditModal: any) {
    this.modalService.open(addEditModal, { size: 'lg', backdrop: 'static', keyboard: false, centered: true });
  }


  //========================= Delete Modal =====================
  openDeleteModal(deletemodal: any) {
    this.modalService.open(deletemodal, { size: 'lg', backdrop: 'static', keyboard: false, centered: true });
  }


  //========================= Reset all ========================
  resetAll() {
    this.limit = this._common.getStartLimit('admin');
    this.offset = 0;
    this.paginationDropDown = this._common.pageLimitDropDownAdmin;
    this.currentPage = 1;
    this.productName = "";
    this.productPrice = "";
    this.productDesc = "";
    this.productCategory = 0;
    this.productFileName = "";
    this.categoryList = [];
    this.getCategoryList();
    this.getProdList = [];
    this.getAllProducts();
    this.globalSearch = "";
  }

  //======================== Reset add/update ========================
  resetAddUpdate() {
    this.productName = "";
    this.productPrice = "";
    this.productDesc = "";
    this.productCategory = 0;
    this.productFileName = "";
    this.categoryList = [];
    this.getCategoryList();
    const banner = document.getElementById('formFile') as HTMLInputElement;
    banner.value = "";
  }
}
