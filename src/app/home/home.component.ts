import { Component, OnInit } from '@angular/core';
import { donations } from '../shared/donations';
import { ApiService } from '../shared/api.service';
import { Donation } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  show = 'new';
  donations: Donation[];
  constructor(private api: ApiService) { }

  toggleShow(value: string) {
    this.show = value;
  }

  ngOnInit(): void {
    this.api.donationsSubject.subscribe((response: Donation[]) => {
      this.donations = response;
    }, err => {
      alert(err);
    })
  }
}
