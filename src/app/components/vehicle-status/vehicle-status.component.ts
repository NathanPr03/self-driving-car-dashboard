import { Component, OnInit } from '@angular/core';
import {VehicleService, VehicleStatuses} from "../../services/vehicle.service";
import { interval } from "rxjs";

@Component({
  selector: 'app-vehicle-status',
  templateUrl: './vehicle-status.component.html',
  styleUrls: ['./vehicle-status.component.css']
})
export class VehicleStatusComponent implements OnInit {

  vehicleStatus: VehicleStatuses = VehicleStatuses.UNKNOWN;

  source = interval(3500);
  subscription = this.source.subscribe(
    x => {
      this.vehicleService.getInfo();
    }
  );
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getInfo();
    this.vehicleService.vehicleStatusStatus.subscribe(isVehicleStatusLoaded => {
      console.log(JSON.stringify(isVehicleStatusLoaded));
      this.vehicleStatus = isVehicleStatusLoaded;
    });
  }
}
