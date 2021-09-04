package com.example.copadomundoback.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class PalpiteDTO {

    private Integer id;
    private Long usuarioID;
    private Integer jogoID;
    private Integer golsPais1;
    private Integer golsPais2;

}
