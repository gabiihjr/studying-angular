import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'app/components/message/message.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageModule,
    ReactiveFormsModule,
  ],
  exports: [MessageModule, ReactiveFormsModule]
})
export class SharedModule { }
