import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { donations } from './donations';
import { Donation } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  donationsSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { 
    const _data = localStorage.getItem('donations');
    const _donations: Donation[] = _data? JSON.parse(_data) : donations;
    this.donationsSubject.next(_donations);
  }
}
