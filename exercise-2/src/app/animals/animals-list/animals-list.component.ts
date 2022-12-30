import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AnimalsService } from './../animals.service';
import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '../animals';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit{

  animals!: Animals;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.userService.returnUser().subscribe((user) => {
    //   const userName = user.name ?? '';
    //   this.animalsService.listaDoUsuario(userName).subscribe((animals) =>{
    //     this.animals = animals;
    //   })
    // })

    // this.animal$ = this.userService.returnUser().pipe(
    //   switchMap((user) => {
    //     const userName = user.name ?? '';
    //     return this.animalsService.listaDoUsuario(userName);
    //   })
    // )

    this.activatedRoute.params.subscribe(param=> {
      this.animals = this.activatedRoute.snapshot.data['animals'];
    })
  }

}
