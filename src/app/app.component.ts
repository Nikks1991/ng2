import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  templateUrl: './app.component.html'
})
export class MyApp {
  title= "Wikipedia.org";
  desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  channels = ["Sony", "ESPN", "History", "Discovery", "Fox Traveller", "Nat Geo"];
  channelsPopularity = [
    {name: "Sony", like:0, dislike:0},
    {name: "ESPN", like:0, dislike:0},
    {name: "History", like:0, dislike:0},
    {name: "Discovery", like:0, dislike:0},
    {name: "Fox Traveller", like:0, dislike:0},
    {name: "Nat Geo", like:0, dislike:0}
  ]
  likeEmitted (data) {
    console.log('Data from child', data);
    this.channelsPopularity[this.channels.indexOf(data)].like++;
    //console.log('Data from child', this.channelsPopularity[this.channels.indexOf(data)]);
  }

  dislikeEmitted (data) {

    this.channelsPopularity[this.channels.indexOf(data)].dislike++;
  }
 }
