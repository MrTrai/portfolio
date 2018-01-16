import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-front-end-skill',
  templateUrl: './front-end-skill.component.html',
  styleUrls: ['./front-end-skill.component.css']
})
export class FrontEndSkillComponent implements OnInit {
  skills: any[];

  constructor() {
    this.skills = [
      {
        name: 'Angular',
        level: 5,
        mastery: 'Expert',
        style: this.getDefaultBorder(),
        img: {
          src: 'assets/icons/angular_icon.png',
          width: 30,
          height: 30
        }
      },
      {
        name: 'React',
        level: 5,
        mastery: 'Expert',
        style: this.getDefaultBorder(),
        img: {
          src: 'assets/icons/react_icon.png',
          width: 30,
          height: 30
        }
      }
    ];
  }

  ngOnInit() {
  }

  getDefaultBorder() {
    return {
      'border-left': '2px solid grey'
    };
  }
}
