import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Usuario } from 'src/app/core/user/usuario';
import { Palpite } from '../palpite/palpite.model';
import { PalpiteService } from '../palpite/palpite.service';
import { Jogo } from './jogo.model';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css'],
})
export class JogoComponent implements OnInit {
  jogos: Jogo[] | undefined;
  palpiteForm: FormGroup;
  @Input() jogo: Jogo;
  palpite: Palpite;
  usuario: Usuario;
  usuarioSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private palpiteService: PalpiteService,
    private notificationService: NotificationService,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.usuarioSubscription = this.authService.currentUser.subscribe(
      (usuario) => (this.usuario = usuario)
    );

    console.log('teste');
    this.inicializarForm();

    this.palpiteForm.controls['golsPais1'].setValue(
      this.jogo?.golsPais1Palpite
    );
    this.palpiteForm.controls['golsPais2'].setValue(
      this.jogo?.golsPais2Palpite
    );
  }

  inicializarForm(): void {
    this.palpiteForm = this.fb.group({
      golsPais1: ['', Validators.required],
      golsPais2: ['', Validators.required],
    });
  }

  onSubmit(jogoID: number): void {
    this.palpite = this.palpiteForm.value;
    this.palpite.usuarioID = Number(this.usuario.id);
    this.palpite.jogoID = jogoID;

    this.palpiteService.cadastrarPalpite(this.palpite).subscribe(
      (palpite) => {
        this.execucaoSucesso(palpite);
        this.notificationService.show(
          'Cadastro realizado com sucesso!',
          'success'
        );
      },
      (error) => {
        this.processaErro(error);
      }
    );
  }

  execucaoSucesso(palpite: Palpite) {
    console.log(palpite);
    //this.reset();
  }

  processaErro(erro: any) {
    console.log(erro);
    this.notificationService.show(erro, 'error');
  }

  reset() {
    //this.palpite = new Palpite();
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }

  antesDoJogoComecar(data: Date) {
    if (moment() > moment(data)) {
      return false;
    }
    return true;
  }
}
