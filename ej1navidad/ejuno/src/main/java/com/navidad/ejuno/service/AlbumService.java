package com.navidad.ejuno.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.navidad.ejuno.model.Album;
import com.navidad.ejuno.repository.IAlbumRepository;

@Service
public class AlbumService {
    
    @Autowired
    private IAlbumRepository albumRepository;

    public Album saveAlbum(Album album){
        return albumRepository.save(album);
    }
    public List<Album> listAlbums(){
        return albumRepository.findAll();
    }
}
