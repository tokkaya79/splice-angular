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
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialsBlockComponent } from './components/testimonials-block/testimonials-block.component';
import { AsGoodComponent } from './sections/as-good/as-good.component';
import { AsGoodItemComponent } from './components/as-good-item/as-good-item.component';
import { ComeChangeComponent } from './sections/come-change/come-change.component';
import { FooterComponent } from './sections/footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
