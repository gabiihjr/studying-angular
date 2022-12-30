import { Router } from '@angular/router';
import { AnimalsService } from './../animals.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit{
  formAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentage = 0;

  constructor(
    private animalsService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.formAnimal = this.formBuilder.group({
      file:['', Validators.required],
      description:['', Validators.maxLength(300)],
      allowComments:[true]
    })
  }

  upload() {
    const allowComments = this.formAnimal.get('allowComments')?.value ?? false;
    const description = this.formAnimal.get('description')?.value ?? '';

    this.animalsService.upload(description, allowComments, this.file)
    .pipe(finalize(() => this.router.navigate(['animals']))
    ).subscribe((event:HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress) {
        const total = event.total ?? 1;
        this.percentage = Math.round(100*(event.loaded / total))
      }
    }, (error) => console.log(error))
  }

  saveFile(file: any): void{
    const [filePhoto] = file?.files;
    this.file = filePhoto;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(filePhoto);
  }
}
