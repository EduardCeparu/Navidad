package com.navidad.ejuno.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.navidad.ejuno.model.Album;
import com.navidad.ejuno.service.AlbumService;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/album")
public class AlbumController {
    
    @Autowired
    private AlbumService albumService;

    @PostMapping("/save")
    public Album save(@RequestBody Album album){
        return albumService.saveAlbum(album);
    }
}
