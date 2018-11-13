import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule]
})
export class MaterialModule { }