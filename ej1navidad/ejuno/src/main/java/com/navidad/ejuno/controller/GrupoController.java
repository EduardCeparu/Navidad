package com.navidad.ejuno.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.navidad.ejuno.model.Grupo;
import com.navidad.ejuno.service.GrupoService;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/grupo")
public class GrupoController {
    
@Autowired
private GrupoService grupoService;

@PostMapping("/save")
public Grupo save(@RequestBody Grupo grupo){
    return grupoService.guardarGrupo(grupo);
}

@GetMapping("/list")
public List<Grupo> list(){
    return grupoService.listarGrupos();
}

@GetMapping("/buscar/{nombreGrupo}")
public Grupo show(@PathVariable String nombreGrupo){
    return grupoService.buscarPorGrupo(nombreGrupo);
}
}
