import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { donations } from '../shared/shared';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  show = 'about';
  donationId = 0;
  donations = donations;
  currentDonation: any;
  constructor(readonly route: ActivatedRoute ) { }

  toggleShow(value: string) {
    this.show = value;
  } 
  ngOnInit(): void {
    this.donationId = Number(this.route.snapshot.params.id);
    this.currentDonation = this.donations.filter(item => {
      return item.id === this.donationId;
    });
    console.log(this.donationId, this.currentDonation);
  }
}
