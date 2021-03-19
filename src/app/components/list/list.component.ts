import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { CloudinaryService } from '../../services/cloudinary.service';
import { Image } from '../../shared/Image';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listOfImages: Image[];
  errorMessage: String;

  constructor(
    private spinner: NgxSpinnerService,
    private cloudinaryService: CloudinaryService
  ) { }

  ngOnInit(): void {
    this.createList();
  }

  createList(): void{
    this.spinner.show();
    this.cloudinaryService.getImageList()
    .subscribe(data => {
      this.listOfImages = data;
      this.spinner.hide();
    }, err => {
      this.errorMessage = "A very serious error has occurred D:"
      this.spinner.hide();
    })
  }

  delete(theId: String): void{
    this.spinner.show();
    this.cloudinaryService.deleteImage(theId)
      .subscribe(
        data => {
          this.spinner.hide();
          this.createList();
        }, err => {
          this.spinner.hide();
          console.log(err);
        }
      )
  }

}
