import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  private text: String;

  constructor() {
    this.text = 'Leave';
  }

  ngOnInit() {
  }

  printLeave() {
    this.text = 'Leave';
    console.log('Test time-line Leave');
  }

  printEnter() {
    this.text = 'Enter';
    console.log('Test time-line Enter');
  }
}
