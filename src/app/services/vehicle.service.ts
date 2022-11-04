import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export enum VehicleStatuses {
  STATIONARY = 0,
  MOVING = 1,
  ENCOUNTERED_OBSTACLE = 2,
  UNKNOWN = -1
}

export const deviceId = 'e00fce6889688c900d20511d';

export type VehicleInfo = {
  body: object,
  cmd: string,
  coreInfo: object,
  device: string,
  name: string,
  result: number
}

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getInfo() {
    let vehicleStatus: VehicleStatuses = VehicleStatuses.UNKNOWN;
    this.httpClient.get<VehicleInfo>("https://api.particle.io/v1/devices/e00fce6889688c900d20511d/vehicleStatus?access_token=458dbf3b5a6b40da88c8a3fa6bf05804cb145522").subscribe(
      result => {
        console.log(result.result);
        switch (result.result) {
          case result.result = 0:
            vehicleStatus = VehicleStatuses.STATIONARY
            break
          case result.result = 1:
            vehicleStatus = VehicleStatuses.MOVING
            break
          case result.result = 2:
            vehicleStatus = VehicleStatuses.ENCOUNTERED_OBSTACLE
            break;
        }
      }
    );

    return vehicleStatus;
  }
}
