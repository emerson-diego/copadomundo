export class Usuario {
  constructor(
    public id?: string,
    public nome?: string,
    public email?: string,
    public senha?: string,
    public token?: string,
    public isAdmin?: boolean,
    public expiration?: Date,
    public authorities?: any
  ) {}
}
