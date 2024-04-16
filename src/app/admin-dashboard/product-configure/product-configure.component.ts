import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';

import { NgxUiLoaderService } from 'ngx-ui-loader';

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
  productCategory: string = "";

  constructor(private modalService: NgbModal, private notifier: NotifierService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxLoader.start();
    setTimeout(() => {
      this.ngxLoader.stop();
    }, 2000)

  }

  openAddEditModal(addEditModal: any) {
    this.modalService.open(addEditModal, { size: 'lg', backdrop: 'static', keyboard: false, centered: true });
  }



  // ============================ ADD FORM ===========================
  onAddSubmit() {
    this.notifier.notify("error", "okdadasdsa");
    if (this.productName == "" || this.productName == null || this.productName == undefined) {

    }
    if (this.productPrice == "" || this.productPrice == null || this.productPrice == undefined) {

    }
    if (this.productDesc == "" || this.productDesc == null || this.productDesc == undefined) {

    }
    if (this.productCategory == "" || this.productCategory == null || this.productCategory == undefined) {

    }

  }

  //========================= Delete Modal =====================
  openDeleteModal(deletemodal:any) {
    this.modalService.open(deletemodal, { size: 'lg', backdrop: 'static', keyboard: false, centered: true });
  }
}
