import { ADZDataServiceService } from "../shared/ADZdata-service.service";
import { Book } from "../shared/AdzBookModel";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
  selector: "ADZ-book-item",
  templateUrl: "./ADZbook-item.component.html",
  styleUrls: ["./ADZbook-item.component.css"]
})
export class ADZBookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() index: string;

  constructor(private service: ADZDataServiceService) {}

  ngOnInit() {}

  adzOnClickbook() {
    this.service.adzopenDialog(this.book);
  }
}
