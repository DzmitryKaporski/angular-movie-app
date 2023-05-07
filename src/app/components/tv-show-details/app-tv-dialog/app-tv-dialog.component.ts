import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-app-tv-dialog',
  templateUrl: './app-tv-dialog.component.html',
  styleUrls: ['./app-tv-dialog.component.scss']
})
export class AppTvDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppTvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
