import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from './../components/message/message.module';
import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { GridPhotosAnimalsComponent } from './grid-photos-animals/grid-photos-animals.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { CommentsComponent } from './detail-animal/comments/comments.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    GridPhotosAnimalsComponent,
    DetailAnimalComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    MessageModule,
    ReactiveFormsModule,
  ],
})
export class AnimalsModule { }
