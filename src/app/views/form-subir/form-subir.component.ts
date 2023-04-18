import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-subir',
  templateUrl: './form-subir.component.html',
  styleUrls: ['./form-subir.component.css']
})
export class FormSubirComponent {
  imgSrc1 = false;
  imgSrc2 = false;
  imgSrc3 = false;
  imgSrc4 = false;
  imgSrc5 = false;
  imgSrc6 = false;

  constructor() {}


  
  onfile(event: any, num: number) {
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (num == 0) {
          this.imgSrc1 = e.target.result;
          console.log("imgSrc1");
        } else if (num == 1) {
          this.imgSrc2 = e.target.result;
          console.log("imgSrc2");
        } else if (num == 2) {
          this.imgSrc3 = e.target.result;
          console.log("imgSrc3");
        } else if (num == 3) {
          this.imgSrc4 = e.target.result;
          console.log("imgSrc4");
        } else if (num == 4) {
          this.imgSrc5 = e.target.result;
          console.log("imgSrc5");
        }else if (num == 5) {
          this.imgSrc5 = e.target.result;
          console.log("imgSrc6");
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
