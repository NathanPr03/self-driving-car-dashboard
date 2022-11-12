import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  center: google.maps.LatLngLiteral = {lat:55.933150041161134, lng:-3.2139476806949494};
  zoom = 12;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker() {
    // @ts-ignore
    this.markerPositions.push({
      lat:55.933150041161134,
      lng:-3.2139476806949494
    });
  }

  constructor() {

  }

  ngOnInit(): void {
    this.addMarker();
  }
}
