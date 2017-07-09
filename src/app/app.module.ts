import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { MyApp } from "./app.component";
import { Child } from "./child.component";
import { RootComponent } from "./root/root.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { DefaultComponent } from "./default/default.component";

const routes: Routes = [
  { path: "", component: DefaultComponent },
  { path: "channel", component: MyApp },
  { path: "aboutus", component: AboutUsComponent }
];

@NgModule({
  declarations: [
    MyApp,
    Child,
    RootComponent,
    AboutUsComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
