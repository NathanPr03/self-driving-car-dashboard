import {Component, OnInit} from '@angular/core';
import {VehicleService, VehicleStatuses} from "../../services/vehicle.service";

@Component({
  selector: 'app-vehicle-status',
  templateUrl: './vehicle-status.component.html',
  styleUrls: ['./vehicle-status.component.css']
})
export class VehicleStatusComponent implements OnInit {

  vehicleStatus: VehicleStatuses = VehicleStatuses.UNKNOWN;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleStatus = this.vehicleService.getInfo();
  }

}
