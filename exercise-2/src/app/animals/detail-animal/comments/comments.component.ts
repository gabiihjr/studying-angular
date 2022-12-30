import { switchMap, tap } from 'rxjs/operators';
import { CommentsService } from './comments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input()
  id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.searchComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  save(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentsService
      .includesComment(this.id, comment)
      .pipe(
        switchMap(() => this.commentsService.searchComment(this.id)),
        tap(() => {
          this.commentForm.reset();
          alert('Comentário salvo!');
        })
      );
  }
}
