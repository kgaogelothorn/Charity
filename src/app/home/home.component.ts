import { Component, OnInit } from '@angular/core';
import { donations } from '../shared/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  show = 'new';
  donations = donations;

  constructor() { }

  toggleShow(value: string) {
    this.show = value;
  }

  ngOnInit(): void {
  }

}
