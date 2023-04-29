import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner-left-subsection',
  templateUrl: './banner-left-subsection.component.html',
  styleUrls: ['./banner-left-subsection.component.css']
})
export class BannerLeftSubsectionComponent {
 @Input() title: string = '';
}
