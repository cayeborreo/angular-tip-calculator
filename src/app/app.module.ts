import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconPersonComponent } from 'src/assets/images/svg-icon-person.component';
import { SvgIconPesoComponent } from 'src/assets/images/svg-icon-peso.component';
import { SvgLogoComponent } from 'src/assets/images/svg-logo.component';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayScreenComponent } from './display-screen/display-screen.component';
import { InputFormComponent } from './input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    DisplayScreenComponent,
    SvgLogoComponent,
    SvgIconPersonComponent,
    SvgIconPesoComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
