import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  data_photo=[];

  abc:any;

  constructor(private photosservice: PhotosService) { }

  ngOnInit(): void {

    this.photosservice.getPhotos().subscribe(data =>{ 
      // console.log(data);
      this.abc = data;
      for(let i=0 ; i<4; i++){
        this.data_photo.push(data[i]);
      }
      console.log(this.data_photo);
      
      // this.data_photo = data;
    });

    // console.log(this.data_photo);
  }

}
