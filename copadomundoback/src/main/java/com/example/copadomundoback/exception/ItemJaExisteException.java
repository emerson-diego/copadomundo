package com.example.copadomundoback.exception;

public class ItemJaExisteException extends RuntimeException {

    public ItemJaExisteException(String item) {
        super(item);
    }

}
