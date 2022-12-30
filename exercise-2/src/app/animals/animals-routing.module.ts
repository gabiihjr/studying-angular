import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AnimalsListResolver } from './animals-list/animals-list.resolver';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
    resolve:{
      animals: AnimalsListResolver,
    }
  },
  {
    path: 'new',
    component: NewAnimalComponent,
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
