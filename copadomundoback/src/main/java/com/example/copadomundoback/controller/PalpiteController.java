package com.example.copadomundoback.controller;

import com.example.copadomundoback.model.Palpite;
import com.example.copadomundoback.model.PalpiteDTO;
import com.example.copadomundoback.service.PalpiteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/palpite")
public class PalpiteController {

    @Autowired
    PalpiteService palpiteService;

    @PostMapping("/")
    @PreAuthorize("hasRole('ROLE_admin')")
    @ApiOperation("Cadastro de Palpites")
    public Palpite salvaPalpite(@RequestBody PalpiteDTO palpiteDTO) {

        Palpite palpiteResult = palpiteService.salvaPalpite(palpiteDTO);
        return palpiteResult;

    }

}
