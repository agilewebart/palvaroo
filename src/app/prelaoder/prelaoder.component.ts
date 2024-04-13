import { Component } from '@angular/core';

@Component({
  selector: 'app-prelaoder',
  templateUrl: './prelaoder.component.html',
  styleUrls: ['./prelaoder.component.css']
})
export class PrelaoderComponent {
  isLoading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false; // hide preloader after 3 seconds
    }, 5000);
  }
}
