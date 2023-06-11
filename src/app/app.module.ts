import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './sections/header/header.component';
import { NavBarComponent } from './components/navBar/navBar.component';

import { AuthComponent } from './components/auth/auth.component';
import { ButtonComponent } from './components/button/button.component';
import { LogosSectionComponent } from './sections/logos-section/logos-section.component';
import { FindSoundSectionComponent } from './sections/find-sound-section/find-sound-section.component';
import { BuildYourSectionComponent } from './sections/build-your-section/build-your-section.component';
import { LogoComponent } from './components/logo/logo.component';
import { StayInSectionComponent } from './sections/stay-in-section/stay-i-section.component';
import { CreatorsSectionComponent } from './sections/creators-section/creators-section.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    LogoComponent,
    AuthComponent,
    ButtonComponent,
    LogosSectionComponent,
    FindSoundSectionComponent,
    BuildYourSectionComponent,
    StayInSectionComponent,
    CreatorsSectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
