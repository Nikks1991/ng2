import { Component, OnInit } from "@angular/core";
import { DataService } from "./../data.service";

@Component({
  selector: "app-yes-no",
  templateUrl: "./yes-no.component.html",
  styleUrls: ["./yes-no.component.css"],
  providers: [DataService]
})
export class YesNoComponent {
  answer = "No answer";
  gif = "No gif";
  constructor(private data: DataService) {}

  shuffle() {
    this.data.fetch().subscribe(data => {
      console.log("data", data);
      console.log("data", data);
      this.answer = data["answer"];
      this.gif = "";
      this.gif = data["image"];
    });

    // .then(data => {
    //   console.log("data", data);
    //   this.answer = data["answer"];
    //   this.gif = "";
    //   this.gif = data["image"];
    // })
  }
}
