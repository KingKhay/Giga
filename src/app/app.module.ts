import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ButtonComponent } from './shared/button/button.component';
import { BannerComponent } from './home/banner/banner.component';
import { BannerLeftSubsectionComponent } from './home/banner/banner-left-subsection/banner-left-subsection.component';
import { InfoComponent } from './home/info/info.component';
import { PriceInfoComponent } from './home/price-info/price-info.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    HeaderComponent,
    NavbarComponent,
    ButtonComponent,
    BannerComponent,
    BannerLeftSubsectionComponent,
    InfoComponent,
    PriceInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
