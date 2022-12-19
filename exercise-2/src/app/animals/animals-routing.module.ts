import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
  },
  {
    path: ':animalId',
    component: DetailAnimalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
