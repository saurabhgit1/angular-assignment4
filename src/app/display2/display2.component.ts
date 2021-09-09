import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  
  image1 = this.photoService.imageurl;
  constructor(private photoService: PhotosService) {
   }

  ngOnInit(): void {
  }

}
