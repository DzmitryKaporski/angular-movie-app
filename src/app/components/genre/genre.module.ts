import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';

import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';

@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    GenreRoutingModule,
    PipeModule,
    SkeletonModule,
    MatPaginatorModule
  ]
})

export class GenreModule { }
