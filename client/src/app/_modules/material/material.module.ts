import { NgModule } from '@angular/core';
import {
  MatTableModule
} from '@angular/material';

const materialComponents = [
  MatTableModule
];

@NgModule({
  imports: materialComponents, 
  exports: materialComponents
})
export class MaterialModule { }
