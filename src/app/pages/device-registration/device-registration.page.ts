import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-registration',
  templateUrl: './device-registration.page.html',
  styleUrls: ['./device-registration.page.scss'],
})
export class DeviceRegistrationPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  registor() {
    this.router.navigate(['invoice-selection']);
  }

}
