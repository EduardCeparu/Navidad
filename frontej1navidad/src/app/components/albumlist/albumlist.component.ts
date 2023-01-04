import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.css']
})
export class AlbumlistComponent implements OnInit {

  albums:any = []

  constructor(private albumService:AlbumService){}
album:Album = new Album()
  list(){
     this.albumService.listarAlbum().subscribe(
      res=>{
        console.log(this.album)

        console.log(res)
        this.albums = res
      }
    )
  }

  ngOnInit(): void {
    this.list()
}
}
