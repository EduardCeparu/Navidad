import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrupoformComponent } from './components/grupoform/grupoform.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { GrouplistComponent } from './components/grouplist/grouplist.component';
import { AlbumlistComponent } from './components/albumlist/albumlist.component';
import { AlbumformComponent } from './components/albumform/albumform.component'

const rutas:Routes = [
  {path: 'grupos/form', component:GrupoformComponent},
  {path: 'grupos', component:GrouplistComponent},
  {path: 'albums', component:AlbumlistComponent},
  {path: 'albums/form', component:AlbumformComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    GrupoformComponent,
    HeaderComponent,
    GrouplistComponent,
    AlbumlistComponent,
    AlbumformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
