import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { MyApp } from "./app.component";
import { Child } from "./child.component";
import { RootComponent } from "./root/root.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { DefaultComponent } from "./default/default.component";
import { ChannelSelectedComponent } from "./channel-selected/channel-selected.component";
import { YesNoComponent } from "./yes-no/yes-no.component";

const routes: Routes = [
  { path: "", component: DefaultComponent },
  {
    path: "channel",
    component: MyApp,
    children: [
      { path: "selectedChannel/:name", component: ChannelSelectedComponent }
    ]
  },
  { path: "aboutus", component: AboutUsComponent },
  { path: "yes-no", component: YesNoComponent }
];

@NgModule({
  declarations: [
    MyApp,
    Child,
    RootComponent,
    AboutUsComponent,
    DefaultComponent,
    ChannelSelectedComponent,
    YesNoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
