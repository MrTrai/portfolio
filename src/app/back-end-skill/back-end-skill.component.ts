import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-end-skill',
  templateUrl: './back-end-skill.component.html',
  styleUrls: ['./back-end-skill.component.css']
})
export class BackEndSkillComponent implements OnInit {
  skills: any[];

  constructor() {
    this.skills = [
      {
        name: 'NodeJS',
        level: 4.5,
        style: this.getDefaultBorder(),
        mastery: 'Proficient',
        img: {
          src:  'assets/icons/node_icon.png',
          width: 30,
          height: 20
        }
      },
      {
        name: 'Play 2',
        level: 4.5,
        style: this.getDefaultBorder(),
        mastery: 'Proficient',
        img: {
          src:  'assets/icons/play_icon.jpg',
          width: 45,
          height: 15
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
