import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { donations } from '../shared/shared';
import { Donation } from '../shared/interfaces';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  show = 'about';
  donationId = 0;
  donation: Donation;
  donations: Donation[];
  donated = false;
  donationSuccess = false;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  toggleShow(value: string) {
    this.show = value;
  }
  ngOnInit(): void {
    this.donationId = Number(this.route.snapshot.params.id);
    this.api.donationsSubject.subscribe(
      (response: Donation[]) => {
        this.donations = response;
        this.getCurrentDonation(response);
      },
      (err) => {
        alert(err);
      }
    );
  }

  donate() {
    let updatedDonations: Donation[] = [];
    this.donations.forEach((donation: Donation) => {
      if (donation.id === this.donationId) {
        donation.progress = (donation.progress + 15) >= 100 ? 100 : donation.progress + 15; // Adding 15 percent for every donation click and capping goal to 100%
        donation.contributions += 1;
        updatedDonations.push(donation);
      } else {
        updatedDonations.push(donation);
      }
    });
    localStorage.setItem('donations', JSON.stringify(updatedDonations));
    this.donated = true;
    this.donationSuccess = true;
    this.gotoTop();
    setTimeout(() => {
      this.donationSuccess = false;
    }, 3000);
  }

  getCurrentDonation(data: Donation[]) {
    let currentDonation = [];
    currentDonation = data.filter((item) => {
      return item.id === this.donationId;
    });
    this.donation = currentDonation[0];
  }

  getStyles(value: number) {
    return {
      'left' : value >= 100 ? '80%' : (value - 8) + '%',
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
