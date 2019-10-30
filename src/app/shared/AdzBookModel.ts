export class Book {
  constructor(
   public pdfLink: string,
   public id: string,
   public saleInfo: string,
   public authors: string,
   public  category: string,
   public imageUrl: string="",
   public language: string,
   public maturityRating: string,
   public pageCount: number,
   public publishDate: string,
   public title: string
  ) {}
}
