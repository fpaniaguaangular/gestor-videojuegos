import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  android:string="./assets/images/android.svg";
  apple:string="./assets/images/apple.svg";
  

  constructor() { }

  ngOnInit(): void {
  }

}
