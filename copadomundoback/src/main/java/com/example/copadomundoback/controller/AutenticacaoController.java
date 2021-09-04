package com.example.copadomundoback.controller;

import com.example.copadomundoback.model.LoginForm;
import com.example.copadomundoback.model.Usuario;
import com.example.copadomundoback.security.TokenService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity<Usuario> autenticar(@RequestBody LoginForm form) {
        UsernamePasswordAuthenticationToken dadosLogin = form.converter();

        try {
            Authentication authentication = authManager.authenticate(dadosLogin);
            Usuario usuario = (Usuario) authentication.getPrincipal();

            String token = tokenService.gerarToken(authentication);
            usuario.setToken(token);

            return ResponseEntity.ok(usuario);
        } catch (AuthenticationException e) {
            return ResponseEntity.badRequest().build();
        }
    }

}