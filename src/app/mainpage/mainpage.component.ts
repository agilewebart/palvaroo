import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  isCross: boolean = false;

  hamBurger() {
    this.isCross = true;
  }

  cross() {
    this.isCross = false;
  }
}
