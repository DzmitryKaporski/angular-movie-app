import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppMovieDialogComponent } from './app-movie-dialog/app-movie-dialog.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
    declarations: [
        MovieDetailsComponent,
        AppMovieDialogComponent
    ],
    imports: [
        CommonModule,
        MovieDetailsRoutingModule,
        PipeModule,
        MatTabsModule,
        MatDialogModule,
        MatIconModule,
        CarouselModule
    ]
})

export class MovieDetailsModule { }
