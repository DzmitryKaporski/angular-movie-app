import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';

import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PipeModule } from './pipe/pipe.module';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { SkeletonModule } from './shared/skeleton/skeleton.module';
import { FooterComponent } from './components/includes/footer/footer.component';
import { HeaderComponent } from './components/includes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PipeModule,
    CarouselModule,
    SidebarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SkeletonModule
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
