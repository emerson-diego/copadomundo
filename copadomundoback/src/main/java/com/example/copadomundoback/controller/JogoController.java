package com.example.copadomundoback.controller;

import java.util.List;

import com.example.copadomundoback.model.Jogo;
import com.example.copadomundoback.repository.JogoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jogos")
// @Api(value = "API REST Jogos")
public class JogoController {

    @Autowired
    JogoRepository jogoRepository;

    @GetMapping("/")
    // @ApiOperation("Lista de Jogos")
    public List<Jogo> listaJogos() {

        List<Jogo> listaJogos = jogoRepository.findAll();
        return listaJogos;
    }

}
