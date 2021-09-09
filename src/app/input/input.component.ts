import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    title: string;
    shortLink =[];
    // tempShortLink: any;
    loading: boolean = false; // Flag variable
    file: File = null;
    json1={
      "name":'',
      "image1_url":'',
      "image2_url":''
    }

    // myFormData = this.fb.group({
    //   title: '',
    // });

  // selectedFile: File;
  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {

  }

  onFileSelected(event){

    // console.log(event)
    // this.selectedFile = event.target.files[0];
    this.file = event.target.files[0];
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // this.File = event.target.files[0];
    reader.onload = (_event) => {
      this.shortLink.push(reader.result);
      // this.tempShortLink = reader.result;
      // console.log(this.url);
      // this._api.setImage1Url(this.url);
    };
    console.log('printing');
    // console.log(this.shortLink);
    
  }

  onUpload(){

    // this.json1.name = this.myFormData.value.title;
    this.json1.name = this.title;
    this.json1.image1_url = this.shortLink[0];
    this.json1.image2_url = this.shortLink[1];
    console.log(this.json1.name);

    this.photoService.imageurl = this.shortLink;

    this.photoService.upload(this.json1)
    .subscribe((res) => {
      console.log(res);
    })

    //direct uploading of file
    // const formData = new FormData();
    // formData.append('image',this.selectedFile, this.selectedFile.name);
    // this.photoService.postPhotos(formData)
    // .subscribe(res => {
    //   console.log(res);
    // });

    // this.loading = !this.loading;
    //     console.log(this.file);
    //     this.photoService.upload(this.file).subscribe(
    //         (event: any) => {
    //             if (typeof (event) === 'object') {
  
    //                 // Short link via api response
    //                 // this.shortLink = event.link;
  
    //                 this.loading = false; // Flag variable 
    //             }
    //         }
    //     );


  }

}
