import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './sections/header/header.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { AuthComponent } from './components/auth/auth.component';
import { ButtonComponent } from './components/button/button.component';
import { LogosSectionComponent } from './sections/logos/logos.component';
import { FindSoundSectionComponent } from './sections/find-sound/find-sound.component';
import { BuildYourSectionComponent } from './sections/build-your/build-your.component';
import { LogoComponent } from './components/logo/logo.component';
import { StayInSectionComponent } from './sections/stay-in/stay-in.component';
import { CreatorsSectionComponent } from './sections/creators/creators.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialsBlockComponent } from './components/testimonials-block/testimonials-block.component';
import { AsGoodComponent } from './sections/as-good/as-good.component';
import { AsGoodItemComponent } from './components/as-good-item/as-good-item.component';
import { ComeChangeComponent } from './sections/come-change/come-change.component';
import { FooterComponent } from './sections/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

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
    CreatorsSectionComponent,
    TestimonialComponent,
    TestimonialsBlockComponent,
    AsGoodComponent,
    AsGoodItemComponent,
    ComeChangeComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
