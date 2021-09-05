package com.example.copadomundoback.service;

import java.util.Optional;

import com.example.copadomundoback.exception.Constantes;
import com.example.copadomundoback.model.Jogo;
import com.example.copadomundoback.model.Palpite;
import com.example.copadomundoback.model.PalpiteDTO;
import com.example.copadomundoback.model.Usuario;
import com.example.copadomundoback.repository.JogoRepository;
import com.example.copadomundoback.repository.PalpiteRepository;
import com.example.copadomundoback.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

@Service
public class PalpiteService extends GenericService {

    // @Autowired
    PalpiteRepository palpiteRepository;
    UsuarioRepository usuarioRepository;
    JogoRepository jogoRepository;

    @Autowired
    public PalpiteService(PalpiteRepository palpiteRepository, UsuarioRepository usuarioRepository,
            JogoRepository jogoRepository, MessageSource messageSource) {

        super(messageSource);
        this.palpiteRepository = palpiteRepository;
        this.usuarioRepository = usuarioRepository;
        this.jogoRepository = jogoRepository;
    }

    public Palpite salvaPalpite(PalpiteDTO palpiteDTO) {

        Optional<Usuario> usuarioOptional = this.usuarioRepository.findById(palpiteDTO.getUsuarioID());
        Optional<Jogo> jogoOptional = this.jogoRepository.findById(palpiteDTO.getJogoID());

        Usuario usuario = usuarioOptional.isPresent() ? usuarioOptional.get() : null;
        Jogo jogo = jogoOptional.isPresent() ? jogoOptional.get() : null;

        Palpite palpite = palpiteRepository.findByUsuarioAndJogo(usuario, jogo);

        if (palpite != null) {
            palpite.setGolsPais1(palpiteDTO.getGolsPais1());
            palpite.setGolsPais2(palpiteDTO.getGolsPais2());

        } else {
            palpite = new Palpite(palpiteDTO, usuario, jogo);
        }

        Palpite palpiteResult = null;

        try {

            palpiteResult = palpiteRepository.save(palpite);

        } catch (Exception e) {

            throw new RuntimeException(this.getLocalMessage(Constantes.INSERCAO_REGISTRO.getKey()));
        }
        return palpiteResult;

    }

}
