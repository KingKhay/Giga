import { Component } from '@angular/core';
import {Info, INFO_DATA} from "./info/model/Info";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  infoData: Info[] = INFO_DATA;
}
