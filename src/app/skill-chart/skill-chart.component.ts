import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.css']
})
export class SkillChartComponent implements OnInit {
  @Input() skill: any;

  constructor() { }

  ngOnInit() {
  }

  getDefaultBorder() {
    return {
      'border-left': '2px solid grey'
    };
  }

  defaultBorder(skill) {
    console.log('Test Default');
    skill.style = {
      'border-left': '2px solid grey'
    };
  }

  highlightBorder(skill) {
    console.log('Test Highlight');
    skill.style = {
      'border-left': '13px solid grey'
    };
  }
}
