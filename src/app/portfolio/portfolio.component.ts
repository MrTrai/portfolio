import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('void', style({display: 'none'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  test: string;

  constructor() {
    this.test = 'in';
  }

  toggleState(): void {
    this.test = this.test === 'in' ? 'void' : 'in';
    console.log(this.test);
  }

  ngOnInit() {
    console.log('this.testState');
    console.log(this.test);
  }

}
