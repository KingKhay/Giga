import {NgModule} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    MatIconModule,
    MatDialogModule,
  ]
})
export class MaterialModule{}
