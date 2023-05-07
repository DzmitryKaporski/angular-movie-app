import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsComponent } from './tv-shows.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TvShowsRoutingModule,
    PipeModule,
    CarouselModule,
    SkeletonModule,
    MatPaginatorModule,
    FormsModule
  ],
  declarations: [
    TvShowsComponent,
  ]
})

export class TvShowsModule { }
