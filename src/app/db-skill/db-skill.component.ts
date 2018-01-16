import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-db-skill',
  templateUrl: './db-skill.component.html',
  styleUrls: ['./db-skill.component.css']
})
export class DbSkillComponent implements OnInit {
  skills: any[];

  constructor() {
    this.skills = [
      {
        name: 'Firebase',
        level: 4,
        mastery: 'Proficient',
        style: this.getDefaultBorder(),
        img: {
          src:  'assets/icons/firebase_icon.png',
          width: 30,
          height: 20
        }
      },
      {
        name: 'MySQL',
        level: 4,
        style: this.getDefaultBorder(),
        mastery: 'Proficient',
        img: {
          src:  'assets/icons/sql_icon.png',
          width: 40,
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
