import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceRegistrationPageRoutingModule } from './device-registration-routing.module';

import { DeviceRegistrationPage } from './device-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceRegistrationPageRoutingModule
  ],
  declarations: [DeviceRegistrationPage]
})
export class DeviceRegistrationPageModule {}
