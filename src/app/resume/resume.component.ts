import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  text: String;

  constructor() {
    this.text = 'Leave';
  }

  ngOnInit() {
  }

  printLeave() {
    this.text = 'Leave';
    console.log('Test resume Leave');
  }

  printEnter() {
    this.text = 'Enter';
    console.log('Test resume Enter');
  }

}
