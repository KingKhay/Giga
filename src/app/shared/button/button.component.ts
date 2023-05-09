import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogFormComponent} from "../dialog-form/dialog-form.component";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() title: string = '';

  constructor(private dialog: MatDialog) {
  }

  openForm() {
    this.dialog.open(DialogFormComponent, {
      width: '80%',
      height: '90%'
    });
  }
}
