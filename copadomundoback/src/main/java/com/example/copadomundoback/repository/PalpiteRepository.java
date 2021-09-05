package com.example.copadomundoback.repository;

import com.example.copadomundoback.model.Jogo;
import com.example.copadomundoback.model.Palpite;
import com.example.copadomundoback.model.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PalpiteRepository extends JpaRepository<Palpite, Integer> {

    Palpite findByUsuarioAndJogo(Usuario usuario, Jogo jogo);

}
