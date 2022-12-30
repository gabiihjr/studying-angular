import { AnimalsService } from './../animals.service';
import { Animal } from './../animals';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.css'],
})
export class DetailAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params?.['animalId'];
    this.animal$ = this.animalsService.searchForId(this.animalId);
  }

  curtir() {
    this.animalsService.like(this.animalId).subscribe((like) => {
      if (like) {
        this.animal$ = this.animalsService.searchForId(this.animalId);
      }
    });
  }

  excluir() {
    this.animalsService.deleteAnimal(this.animalId).subscribe({
      complete: () => this.router.navigate(['/animals/']),
      error: (error) => console.log(error),
    });
  }
}
