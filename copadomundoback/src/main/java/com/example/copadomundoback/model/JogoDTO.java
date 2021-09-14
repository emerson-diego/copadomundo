package com.example.copadomundoback.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class JogoDTO {

    public JogoDTO(Jogo jogo, Palpite palpite) {
        this.id = jogo.getId();
        this.data = jogo.getData();
        this.pais1 = jogo.getPais1();
        this.pais2 = jogo.getPais2();
        this.golsPais1 = jogo.getGolsPais1();
        this.golsPais2 = jogo.getGolsPais2();
        if (palpite != null) {
            this.golsPais1Palpite = palpite.getGolsPais1();
            this.golsPais2Palpite = palpite.getGolsPais2();
        }

    }

    private Integer id;

    private Pais pais1;

    private Pais pais2;

    // @Temporal(TemporalType.TIMESTAMP)
    // @JsonFormat(shape = JsonFormat.Shape.STRING, timezone = "GMT-03:00")
    private Date data;

    private Integer golsPais1;

    private Integer golsPais2;

    private Integer golsPais1Palpite;

    private Integer golsPais2Palpite;

}
