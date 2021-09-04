import { Pais } from '../pais.model';

export class Jogo {
  constructor(
    public id?: number,
    public pais1?: Pais,
    public pais2?: Pais,
    public data?: Date
  ) {}
}
