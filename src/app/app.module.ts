import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthComponent } from './components/auth/auth.component';
import { ButtonComponent } from './components/button/button.component';
import { LogosSectionComponent } from './components/logos-section/logos-section.component';
import { FindSoundSectionComponent } from './components/find-sound-section/find-sound-section.component';
import { TitleComponent } from './components/title/title.component';

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
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
