import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { HomeComponent } from './component/home/home.component';
import { GameTabsComponent } from './component/game-tabs/game-tabs.component';
import { DetailsComponent } from './component/details/details.component';
import {HttpHeaders} from "./interceptor/http-headers";
import {HttpErrors} from "./interceptor/http-errors";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {GaugeModule} from "angular-gauge";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    GameTabsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    GaugeModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaders,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrors,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
