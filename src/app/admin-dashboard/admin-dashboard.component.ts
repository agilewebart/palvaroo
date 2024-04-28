import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  el: HTMLElement | null = null;
  toggleButton: HTMLElement | null = null;

  constructor(private router: Router, private _common: CommonService) { }

  ngOnInit() {
    this.el = document.getElementById("wrapper");
    this.toggleButton = document.getElementById("menu-toggle");
  }

  toggleMenu() {
    if (this.el) {
      this.el.classList.toggle("toggled");
    }
  }

  redirectTo(path: any) {
    this.router.navigate(['/admindashboard/' + path])
  }


  logOut() {
    this._common.clearLocalStorage();
    this.router.navigate(['/home']);
  }
}
