import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

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
  private readonly vehicleStatus = new Subject<VehicleStatuses>();
  readonly vehicleStatusStatus = this.vehicleStatus.asObservable();

  constructor(private httpClient: HttpClient) { }

  getInfo(): void {
    const request = this.httpClient.get<VehicleInfo>("https://api.particle.io/v1/devices/e00fce6889688c900d20511d/vehicleStatus?access_token=458dbf3b5a6b40da88c8a3fa6bf05804cb145522");
    request.subscribe(
      result => {
        console.log("Top of function: " + result.result);
        switch (result.result) {
          case result.result = 0:
            this.vehicleStatus.next(VehicleStatuses.STATIONARY);
            break;
          case result.result = 1:
            this.vehicleStatus.next(VehicleStatuses.MOVING);
            break;
          case result.result = 2:
            this.vehicleStatus.next(VehicleStatuses.ENCOUNTERED_OBSTACLE);
            break;
        }
      }, error => {
        this.vehicleStatus.next(VehicleStatuses.UNKNOWN)
      }
    );
  }
}
