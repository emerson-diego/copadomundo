package com.example.copadomundoback.service;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class GenericService {

    MessageSource messageSource;

    public String getLocalMessage(String key, String... params) {
        return messageSource.getMessage(key, params, Locale.getDefault());
    }

    public String getLocalMessage(String key) {
        return messageSource.getMessage(key, new Object[] { "" }, Locale.getDefault());
    }

}
