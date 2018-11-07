import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/interfaces.interface';
import { PostsService } from 'src/app/providers/posts.service';
import { NotyfService } from 'ng-notyf';
import { Componente } from 'src/app/abstract/component.abstract';

declare var $: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent extends Componente implements OnInit {

  caso;
  post: Post;

  constructor(public _ps: PostsService, private  notif: NotyfService) {
    super(_ps, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(post: Post) {
    this.caso = 'Editar';
    console.log(post);
    this._idEditar = post._id;
    this.post = post;
  }

  resetearItem() {
    this.post = {
      titulo: '',
      contenido: '',
      fechaPublicacion: ''
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }

}
