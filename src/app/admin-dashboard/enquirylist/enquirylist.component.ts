import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from 'src/app/service/common.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-enquirylist',
  templateUrl: './enquirylist.component.html',
  styleUrls: ['./enquirylist.component.css']
})
export class EnquirylistComponent implements OnInit {

  limit: number = 0;
  offset: number = 0;
  currentPage: number = 1;
  paginationDropDown: any[] = [];


  enquiryListArr: any[] = [];

  constructor(private _rest: RestApiService, private common: CommonService, private modalService: NgbModal, private notifier: NotifierService,private loader:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.paginationDropDown = this.common.pageLimitDropDownAdmin;
    this.limit = this.common.getStartLimit('admin')
    this.getAllEnquiryList();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.offset = (this.currentPage - 1) * this.limit;
      this.getAllEnquiryList();
    }
  }

  nextPage() {
    this.currentPage += 1;
    this.offset = this.limit * (this.currentPage - 1);
    this.getAllEnquiryList();
  }

  changeLimit(e: any) {
    this.offset = 0;
    this.currentPage = 1;
    this.getAllEnquiryList();
  }


  //--------_ Fetch all enquiry -------------
  getAllEnquiryList() {
    this.loader.start();

    const reqPayload = {
      "limit": this.limit.toString(),
      "offset": this.offset.toString()
    }
    this._rest.getAllEnquiry(reqPayload).subscribe((res: any) => {
      this.loader.stop()
      if (res.status == 200) {
        this.enquiryListArr = res.response;
      }
      else {
        this.notifier.notify('error', res.message);
      }
    })
  }

  resetAll() {
    this.limit = 15;
    this.offset = 0;
    this.currentPage = 1;
    this.getAllEnquiryList()
  }
}
