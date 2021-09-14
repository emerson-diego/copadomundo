package com.example.copadomundoback.service;

import java.util.ArrayList;
import java.util.List;

import com.example.copadomundoback.model.Jogo;
import com.example.copadomundoback.model.JogoDTO;
import com.example.copadomundoback.model.Palpite;
import com.example.copadomundoback.model.Usuario;
import com.example.copadomundoback.repository.JogoRepository;
import com.example.copadomundoback.repository.PalpiteRepository;
import com.example.copadomundoback.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

@Service
public class JogoService extends GenericService {

    PalpiteRepository palpiteRepository;
    UsuarioRepository usuarioRepository;
    JogoRepository jogoRepository;

    @Autowired
    public JogoService(PalpiteRepository palpiteRepository, UsuarioRepository usuarioRepository,
            JogoRepository jogoRepository, MessageSource messageSource) {

        super(messageSource);
        this.palpiteRepository = palpiteRepository;
        this.usuarioRepository = usuarioRepository;
        this.jogoRepository = jogoRepository;
    }

    public List<JogoDTO> buscaJogos(Long idUsuario) {

        List<Jogo> jogos = jogoRepository.findAll();
        List<JogoDTO> jogosDTO = new ArrayList<>();

        for (Jogo jogo : jogos) {
            Usuario usuario = new Usuario(idUsuario);
            Palpite palpite = palpiteRepository.findByUsuarioAndJogo(usuario, jogo);
            JogoDTO jogoDTO = new JogoDTO(jogo, palpite);

            jogosDTO.add(jogoDTO);
        }

        return jogosDTO;
    }

}
