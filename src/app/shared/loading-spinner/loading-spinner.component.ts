import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  // templateUrl: './loading-spinner.component.html',
  template: '<div class="lds-dual-ring"></div>',
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}