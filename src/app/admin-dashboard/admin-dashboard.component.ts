import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  el: HTMLElement | null = null;
  toggleButton: HTMLElement | null = null;

  ngOnInit() {
    this.el = document.getElementById("wrapper");
    this.toggleButton = document.getElementById("menu-toggle");
  }

  toggleMenu() {
    if (this.el) {
      this.el.classList.toggle("toggled");
    }
  }
}
