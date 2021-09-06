import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item = {
    id: 0,
    image:'',
    heading: '',
    subHeading: '',
    description: '', 
    cta: false,
    cta_url: '',
    popular: false,
    end: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
