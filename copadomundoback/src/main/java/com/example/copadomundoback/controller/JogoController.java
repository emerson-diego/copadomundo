package com.example.copadomundoback.controller;

import java.util.List;

import com.example.copadomundoback.model.JogoDTO;
import com.example.copadomundoback.repository.JogoRepository;
import com.example.copadomundoback.service.JogoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jogos")
// @Api(value = "API REST Jogos")
public class JogoController {

    @Autowired
    JogoRepository jogoRepository;

    @Autowired
    JogoService jogoService;

    @GetMapping("/{idUsuario}")
    // @ApiOperation("Lista de Jogos")
    public List<JogoDTO> listaJogos(@PathVariable Long idUsuario) {

        // List<Jogo> listaJogos = jogoRepository.findAll();
        List<JogoDTO> listaJogosComPalpites = jogoService.buscaJogos(idUsuario);
        return listaJogosComPalpites;
    }

}
