import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AdminComponent } from "./components/admin/admin.component";
import {} from "./components/home/HomeComponent";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      { path: "admin", component: AdminComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
