import {Component, OnInit} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';

declare var jQuery: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  divStyle: any;
  changeRef: any;

  constructor(private ref: ChangeDetectorRef) {
    this.divStyle = this.defaultStyle();

    this.changeRef = ref;
  }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.divStyle = this.defaultStyle();
      this.changeRef.markForCheck();
      console.log('Resize');
      console.log('Height');
      console.log(this.divStyle);
    }, false);
    console.log('Height');
    console.log(this.divStyle);
  }

  defaultStyle() {
    return {
      'height': jQuery(window).height().toString() + 'px',
      'padding': '20px'
    };
  }

  titleFormatCircle() {
    return '3';
  }

  getStyle() {
    return this.divStyle;
  }
}
