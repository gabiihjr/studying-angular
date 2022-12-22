import { AnimalsService } from './../animals.service';
import { Animal } from './../animals';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.css']
})
export class DetailAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(private animalsService: AnimalsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params?.['animalId'];
    this.animal$ = this.animalsService.searchForId(this.animalId);
  }

  curtir() {

  }

  excluir() {

  }
}
