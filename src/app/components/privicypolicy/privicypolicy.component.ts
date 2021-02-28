import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privicypolicy',
  templateUrl: './privicypolicy.component.html',
  styleUrls: ['./privicypolicy.component.scss']
})
export class PrivicypolicyComponent implements OnInit {
  viewMode: any;
  constructor() { }

  ngOnInit(): void {
    this.viewMode = "tab1";
    console.log(this.viewMode);
  }

}
