import { Component, Input, OnInit } from '@angular/core';
import { Donation } from '../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Donation = {
    id: 0,
    image:'',
    heading: '',
    subHeading: '',
    description: '', 
    cta: false,
    cta_url: '',
    popular: false,
    end: false,
    progress: 0,
    aboutImg: '',
    goal: '',
    contributions:0,
    days: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
