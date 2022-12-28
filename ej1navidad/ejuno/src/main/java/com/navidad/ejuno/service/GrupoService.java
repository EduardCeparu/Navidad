package com.navidad.ejuno.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.navidad.ejuno.model.Grupo;
import com.navidad.ejuno.repository.IGrupoRepository;

@Service
public class GrupoService {
    
    @Autowired
    private IGrupoRepository grupoRepository;

    public Grupo guardarGrupo(Grupo grupo){
        return grupoRepository.save(grupo);
    }

    public List<Grupo> listarGrupos(){
        return grupoRepository.findAll();
    }
}
