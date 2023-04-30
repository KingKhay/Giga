import {Component, Input} from '@angular/core';
import {Info} from "./model/Info";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  @Input() data!: Info;
}
