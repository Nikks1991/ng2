import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-channel-selected",
  templateUrl: "./channel-selected.component.html",
  styleUrls: ["./channel-selected.component.css"]
})
export class ChannelSelectedComponent implements OnInit {
  channelName: string = "Network not active!";
  sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(param => {
      this.channelName = param["name"];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
