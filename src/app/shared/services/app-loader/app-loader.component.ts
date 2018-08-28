import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.css']
})
export class AppLoaderComponent implements OnInit {
  title;
  message;
  constructor(public dialogRef: MaterialModule<AppLoaderComponent>) {}

  ngOnInit() {
  }

}
