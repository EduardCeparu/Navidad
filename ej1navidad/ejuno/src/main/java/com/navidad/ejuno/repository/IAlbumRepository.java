package com.navidad.ejuno.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.navidad.ejuno.model.Album;

@Repository
public interface IAlbumRepository extends JpaRepository<Album, Long>{
    
}
