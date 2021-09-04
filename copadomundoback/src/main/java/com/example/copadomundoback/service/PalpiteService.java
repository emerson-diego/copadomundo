package com.example.copadomundoback.service;

import java.util.Optional;

import com.example.copadomundoback.model.Jogo;
import com.example.copadomundoback.model.Palpite;
import com.example.copadomundoback.model.PalpiteDTO;
import com.example.copadomundoback.model.Usuario;
import com.example.copadomundoback.repository.JogoRepository;
import com.example.copadomundoback.repository.PalpiteRepository;
import com.example.copadomundoback.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PalpiteService {

    // @Autowired
    PalpiteRepository palpiteRepository;
    UsuarioRepository usuarioRepository;
    JogoRepository jogoRepository;

    @Autowired
    public PalpiteService(PalpiteRepository palpiteRepository, UsuarioRepository usuarioRepository,
            JogoRepository jogoRepository) {
        this.palpiteRepository = palpiteRepository;
        this.usuarioRepository = usuarioRepository;
        this.jogoRepository = jogoRepository;
    }

    public Palpite salvaPalpite(PalpiteDTO palpiteDTO) {

        Optional<Usuario> usuarioOptional = this.usuarioRepository.findById(palpiteDTO.getUsuarioID());
        Optional<Jogo> jogoOptional = this.jogoRepository.findById(palpiteDTO.getJogoID());

        Usuario usuario = usuarioOptional.isPresent() ? usuarioOptional.get() : null;
        Jogo jogo = jogoOptional.isPresent() ? jogoOptional.get() : null;

        Palpite palpite = new Palpite(palpiteDTO, usuario, jogo);

        Palpite palpiteResult = null;

        try {

            palpiteResult = palpiteRepository.save(palpite);

        } catch (Exception e) {

            System.out.println(e.getMessage());
        }
        return palpiteResult;

    }

}
