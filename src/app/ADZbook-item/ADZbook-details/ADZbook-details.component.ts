import { Book } from '../../shared/AdzBookModel';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'ADZ-book-details',
  templateUrl: './ADZbook-details.component.html',
  styleUrls: ['./ADZbook-details.component.css']
})
export class ADZBookDetailsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ADZBookDetailsComponent>,@Inject(MAT_DIALOG_DATA) public data: Book) { }

  ngOnInit() {
  }

  adzOnNoClick(): void {
    this.dialogRef.close();
  }
}
