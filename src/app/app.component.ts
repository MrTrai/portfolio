import {Component, OnInit} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import * as Typed from 'typed.js';

declare var jQuery: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  divStyle: any;
  changeRef: any;
  typedSchool: any;
  typedName: any;
  typedAbout: any;
  typedExp: any;
  typedSkills: any;
  typedProjects: any;
  stackList: any[];
  techList: any;
  objectKeys = Object.keys;
  windowHeight: any;
  windowWidth: any;

  constructor(private ref: ChangeDetectorRef) {
    this.divStyle = this.defaultStyle();
    this.changeRef = ref;
    this.stackList = ['Front End', 'Back End', 'Data Base'];
    this.techList = {
      'Front End': [{
        name: 'Angular',
        img: 'assets/icons/angular_icon.png',
        value: 100,
        level: 'Expert',
        imgStyle: this.defaultImgStyle(),
        textStyle: {}
      },
        {
          name: 'React',
          img: 'assets/icons/react_icon.png',
          value: 100,
          level: 'Expert',
          imgStyle: this.defaultImgStyle(),
          textStyle: {}
        }],
      'Back End': [
        {
          name: 'Play 2',
          img: 'assets/icons/play_icon2.png',
          value: 90,
          level: 'Proficient',
          imgStyle: {
            'height': '100px',
            'position': 'absolute',
            'top': '20%',
            'width': '200px',
            'left': '20%'
          },
          textStyle: {}
        },
        {
          name: 'NodeJS',
          img: 'assets/icons/node_icon.png',
          value: 90,
          level: 'Proficient',
          imgStyle: this.defaultImgStyle(),
          textStyle: {}
        }
      ],
      'Data Base': [
        {
          name: 'Fire Base',
          img: 'assets/icons/firebase_icon.png',
          value: 90,
          level: 'Proficient',
          imgStyle: this.defaultImgStyle(),
          textStyle: {}
        },
        {
          name: 'MySQL',
          img: 'assets/icons/sql_icon.png',
          value: 90,
          level: 'Proficient',
          imgStyle: {
            'height': '100px',
            'width': '200px',
            'position': 'absolute',
            'top': '20%',
            'left': '20%'
          },
          textStyle: {}
        }
      ]
    };
  }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.divStyle = this.defaultStyle();
      this.changeRef.markForCheck();
      console.log('Resize');
      console.log('Height');
      console.log(this.divStyle);
    }, false);

    this.typedName = new Typed('#typed-name', {
      strings: ['<b>Trai Tran</b>'],
      typeSpeed: 40,
      startDelay: 300
    });

    this.typedSchool = new Typed('#typed-school', {
      strings: ['<h4>Georgia Institute of Technology</h4>'],
      typeSpeed: 10,
      showCursor: false,
      startDelay: 300
    });

    this.typedAbout = new Typed('#typed-about-me', {
      strings: ['<b>About Me</b>'],
      typeSpeed: 40,
      startDelay: 300
    });

    this.typedExp = new Typed('#typed-exp', {
      strings: ['<b>Experience</b>'],
      typeSpeed: 40,
      startDelay: 300
    });

    this.typedSkills = new Typed('#typed-skills', {
      strings: ['<b>Development Stacks</b>'],
      typeSpeed: 40,
      startDelay: 300
    });

    this.typedProjects = new Typed('#typed-projects', {
      strings: ['<b>Other Projects</b>'],
      typeSpeed: 40,
      startDelay: 300
    });
    console.log('Height');
    console.log(this.divStyle);
  }

  print(event) {
    console.log('In View');
  }

  defaultTextStyle() {
    return {
    };
  }

  defaultImgStyle() {
    return {
      'height': '200px',
      'width': '200px',
      'position': 'absolute',
      'left': '25%'
    };
  }

  defaultStyle() {
    const height = jQuery(window).height().toString() + 'px';
    const width = jQuery(window).width();
    const gapHeight = (jQuery(window).height() / 3).toString() + 'px';
    return {
      'gap': {
        'height': gapHeight,
        'position': 'relative'
      },
      'intro': {
        'height': height,
        'color': '#fff'
        // 'background': '#fcf6ff'
      },
      'about': {
        'height': height,
        'background': '#00000b'
      },
      'experience': {
        'height': height,
        'background': '#fff'
      },
      'skills': {
        'height': height,
        'overflow': width < 1000 ? 'auto' : 'hidden',
        'background': '#00000b'
      },
      'projects': {
        'background': '#f4fff4'
      }
    };
  }

  titleFormatCircle() {
    return '3';
  }

  getStyle() {
    return this.divStyle;
  }

  toTop() {
    console.log("To Top");
    window.scrollTo(0, 0);
  }

  toBottom() {
    window.scrollTo(0,document.body.scrollHeight);
  }
}
