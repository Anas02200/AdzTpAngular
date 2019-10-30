import { ADZBookEffect } from "./ADZbooklist/ADZstore/ADZbooklist.effects";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ADZInputBarComponent } from "./ADZinput-bar/ADZinput-bar.component";
import { ADZResultPageComponent } from "./ADZresult-page/ADZresult-page.component";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule
} from "@angular/material";
import { ADZBooklistComponent } from "./ADZbooklist/ADZbooklist.component";
import { ADZBookItemComponent } from "./ADZbook-item/ADZbook-item.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import * as fromGlobalStore from "./shared/globalStore/ADZapp.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ADZBookDetailsComponent } from "./ADZbook-item/ADZbook-details/ADZbook-details.component";

@NgModule({
  declarations: [
    AppComponent,
    ADZInputBarComponent,
    ADZResultPageComponent,
    ADZBooklistComponent,
    ADZBookItemComponent,
    ADZBookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromGlobalStore.appReducer),
    EffectsModule.forRoot([ADZBookEffect]),
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [ADZBookDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
