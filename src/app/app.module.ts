import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehicleStatusComponent } from './components/vehicle-status/vehicle-status.component';
import { VehicleIdComponent } from './components/vehicle-id/vehicle-id.component';
import { HttpClientModule} from "@angular/common/http";
import { MapsComponent } from './components/maps/maps.component';
import { GoogleMapsModule } from "@angular/google-maps";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VehicleStatusComponent,
    VehicleIdComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
