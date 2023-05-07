import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowDetailsRoutingModule } from './tv-show-details-routing.module';
import { TvShowDetailsComponent } from './tv-show-details.component';
import { TabViewModule } from 'primeng/tabview';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppTvDialogComponent } from './app-tv-dialog/app-tv-dialog.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
    declarations: [
        TvShowDetailsComponent,
        AppTvDialogComponent
    ],
    imports: [
        CommonModule,
        TvShowDetailsRoutingModule,
        PipeModule,
        TabViewModule,
        MatTabsModule,
        MatDialogModule,
        MatIconModule,
        CarouselModule
    ]
})
export class TvShowDetailsModule { }
