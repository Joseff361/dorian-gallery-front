import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CloudinaryService } from '../../services/cloudinary.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild('imagenInputFile') imageFile: ElementRef;

  theImage: File;
  imgMinUrl: String = "";
  errMessage: String;

  constructor(
    private cloudinaryService: CloudinaryService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any): void{
    this.errMessage = null; 
    this.theImage = event.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(this.theImage);
    fr.onloadend = (event_2: any) => {
      this.imgMinUrl = event_2.target.result;
    };
  }

  onSubmit(): void{
    this.spinner.show();
    this.cloudinaryService.postImage(this.theImage).subscribe(
      data => {
        this.spinner.hide();
        this.router.navigate(['/']);
      },
      err => {
        this.errMessage = "ERROR: You must upload an image"
        this.spinner.hide();
        this.reset();
      }
    );
  }

  reset(): void{
    this.theImage = null;
    this.imgMinUrl = null;
    this.imageFile.nativeElement.value = '';
  }

}
