import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "entityLikeDislike",
  template: `<div>
    {{entityName}}
    <br>
    <button type="button" name="button" (click)="likeClicked(entityName)">Like  </button>
    <button type="button" name="button" (click)="disLikeClicked(entityName)">Dislike </button>
    <button type="button" name="button" (click)="subscribe(entityName)">Subscribe </button>
    <br>
  </div>`
})
export class Child {
  @Input() entityName = "";

  @Output() liked = new EventEmitter();
  @Output() disliked = new EventEmitter();

  constructor(private router: Router) {}

  likeClicked(entityName) {
    this.liked.emit(entityName);
  }

  disLikeClicked(entityName) {
    this.disliked.emit(entityName);
  }

  subscribe(entityName) {
    this.router.navigate(["/channel/selectedChannel", entityName]);
  }
}
