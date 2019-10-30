import { ADZBookDetailsComponent } from '../ADZbook-item/ADZbook-details/ADZbook-details.component';
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Book } from "./AdzBookModel";

import { MatDialog, MatDialogConfig } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class ADZDataServiceService {


  searchedValue;

  constructor(


    public dialog: MatDialog
  ) {}


  adzopenDialog(data: Book): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "auto";
    dialogConfig.height = "auto";
    dialogConfig.scrollStrategy;
    dialogConfig.data = {
      title: data.title,
      imageUrl: data.imageUrl,
      saleInfo: data.saleInfo,
      language: data.language,
      maturityRating: data.maturityRating,
      pageCount: data.pageCount,
      publishDate: data.publishDate,
      category: data.category,
      authors: data.authors,
      pdfLink:data.pdfLink
    };

    const dialogRef = this.dialog.open(ADZBookDetailsComponent, dialogConfig);

  }
}
