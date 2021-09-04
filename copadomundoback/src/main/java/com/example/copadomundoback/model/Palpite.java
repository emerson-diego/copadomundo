package com.example.copadomundoback.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "tb_palpite")
public class Palpite {

    public Palpite(PalpiteDTO palpiteDTO, Usuario usuario, Jogo jogo) {
        this.id = palpiteDTO.getId();
        this.golsPais1 = palpiteDTO.getGolsPais1();
        this.golsPais2 = palpiteDTO.getGolsPais2();
        this.usuario = usuario;
        this.jogo = jogo;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Jogo jogo;

    @Column(name = "gols_pais1")
    private Integer golsPais1;

    @Column(name = "gols_pais2")
    private Integer golsPais2;

}
