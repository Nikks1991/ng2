import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "entityLikeDislike",
  template: `<div>
    {{entityName}}
    <br>
    <button type="button" name="button" (click)="likeClicked(entityName)">Like  </button>
    <button type="button" name="button" (click)="disLikeClicked(entityName)">Dislike </button>
    <br>
  </div>`
})
export class Child {
  @Input() entityName = "";

  @Output() liked = new EventEmitter();
  @Output() disliked = new EventEmitter();

  likeClicked(entityName) {
    this.liked.emit(entityName);
  }

  disLikeClicked(entityName) {
    this.disliked.emit(entityName);
  }
}
