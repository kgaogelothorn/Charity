import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [
    {
    image:'assets/photographer.jpg',
    heading: 'Feed 60 Kids for a month',
    subHeading: 'RAISING R30 000.00 BY 21 AUG',
    description: 'Feed-a-child, Cape Town', 
  },
    {
    image:'assets/photographer.jpg',
    heading: 'Buy 5000 Blankets',
    subHeading: 'RAISING R8 000.00 BY 21 AUG',
    description: 'Drought fund, Durban', 
  },
    {
    image:'assets/photographer.jpg',
    heading: 'Sponsor a farm with 1000 litres of water',
    subHeading: 'RAISING R30 000.00 BY 21 AUG',
    description: 'SPCA, Johannesburg', 
  },
  {
    image:'assets/photographer.jpg',
    heading: 'Buy 5000 Blankets',
    subHeading: 'RAISING R8 000.00 BY 21 AUG',
    description: 'Drought fund, Durban', 
  },
];

  isShown: boolean = true;
  toggleShow() {
    this.isShown = !this.isShown;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
