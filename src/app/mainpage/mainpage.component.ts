import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isCross: boolean = false;
  activatedRoute !: ActivatedRoute

  constructor(private _router: Router, private _activeRoute: ActivatedRoute) { }

  

  ngOnInit(): void {
    this._activeRoute.fragment.subscribe((res: any) => {
      console.log(res)
      this.jumpToSpecificSection(res);
    })
  }

  //------------ Go to this page ------------
  jumpToSpecificSection(fragment:any){
    document.getElementById(fragment)?.scrollIntoView({behavior:'smooth'})
  }

  hamBurger() {
    this.isCross = true;
  }

  cross() {
    this.isCross = false;
  }



}
