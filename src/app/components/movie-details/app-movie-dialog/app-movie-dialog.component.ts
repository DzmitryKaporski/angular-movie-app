import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-app-movie-dialog',
  templateUrl: './app-movie-dialog.component.html',
  styleUrls: ['./app-movie-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppMovieDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }
}
