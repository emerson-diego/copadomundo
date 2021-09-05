package com.example.copadomundoback.exception;

import lombok.Getter;

@Getter
public enum Constantes {
    REGISTRO_AUSENTE("registro.ausente"), REGISTROS_AUSENTES("registros.ausentes"),
    INSERCAO_REGISTRO("insercao.registro"), EDICAO_REGISTRO("edicao.registro"), DELETE_REGISTRO("delete.registro"),
    ULTIMA_ATUALIZACAO("ultima.atualizacao"), ITEM_EXISTE("item.existe");

    String key;

    Constantes(String key) {
        this.key = key;
    }
}