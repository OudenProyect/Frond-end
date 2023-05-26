import { Component, EventEmitter, Input, OnInit, inject } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() post: any[] = [];
  encantas: any[] = [];
  posst = inject(PostService);

  constructor() {}

  ngOnInit(): void {
    if (this.post[0].usersFavorit[0] && this.post[0].usersFavorit[0].favoritPublications) {
      this.post[0].usersFavorit[0].favoritPublications.forEach((e: any) => {
        this.encantas.push(e);

      });
    }

    console.log(this.encantas);
  }

  meencanta(id: any) {
    if(this.encantas.includes(id)){
      this.encantas.splice(this.encantas.indexOf(id),1);
      this.posst.removeFavorite(id).subscribe((e: any) => {
        console.log(e);
      },(err: any) => {
        console.log({error_remobve: err})
      });
    }else{
      this.encantas.push(id);
      this.posst.addFavorite(id).subscribe((e: any) => {
        console.log(e);
      },(err: any) => {
        console.log({error_Add: err})
      });
    }
    console.log(this.encantas);
  }
}
