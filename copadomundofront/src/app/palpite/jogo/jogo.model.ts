import { Pais } from '../pais.model';

export class Jogo {
  constructor(
    public id?: number,
    public pais1?: Pais,
    public pais2?: Pais,
    public data?: Date,
    public golsPais1?: number,
    public golsPais2?: number,
    public golsPais1Palpite?: number,
    public golsPais2Palpite?: number
  ) {}
}
