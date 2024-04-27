import { Component } from '@angular/core';

@Component({
  selector: 'app-enquirylist',
  templateUrl: './enquirylist.component.html',
  styleUrls: ['./enquirylist.component.css']
})
export class EnquirylistComponent {
  limit:number = 0;
  paginationDropDown:any[] = []
  prevPage() { }
  nextPage() { }
  changeLimit(e:any){}
}
