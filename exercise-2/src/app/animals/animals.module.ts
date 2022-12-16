import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { GridPhotosAnimalsComponent } from './grid-photos-animals/grid-photos-animals.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    GridPhotosAnimalsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
  ]
})
export class AnimalsModule { }
