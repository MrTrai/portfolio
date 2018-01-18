import {Component, Input, OnInit} from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.css']
})
export class TyperComponent implements OnInit {
  @Input() content: string[];
  @Input() speed: number;
  private typer: any;

  constructor() {
    this.content = [];
  }

  ngOnInit() {
    this.typer = new Typed('#typed', {
      strings: this.content,
      typeSpeed: !this.speed ? this.speed : 30,
      startDelay: 300
    });
  }

}
