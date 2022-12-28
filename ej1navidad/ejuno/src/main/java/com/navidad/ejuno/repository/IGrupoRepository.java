package com.navidad.ejuno.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.navidad.ejuno.model.Grupo;

@Repository
public interface IGrupoRepository extends JpaRepository<Grupo, Long>{
    
}
