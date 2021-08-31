import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FileUploadModule } from 'primeng/fileupload';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { InputDateComponent } from './components/campos/input-date/input-date.component';
import { InputFileComponent } from './components/campos/input-file/input-file.component';
import { InputNumberComponent } from './components/campos/input-number/input-number.component';
import { InputSelectComponent } from './components/campos/input-select/input-select.component';
import { InputTextComponent } from './components/campos/input-text/input-text.component';
import { InputTextareaComponent } from './components/campos/input-textarea/input-textarea.component';
import { SelectAnoComponent } from './components/select-ano/select-ano.component';
import { SelectMesComponent } from './components/select-mes/select-mes.component';
import { SelectPeriodoComponent } from './components/select-periodo/select-periodo.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ContainerComponent } from './container/container.component';
import { ChecaPermissaoDirective } from './diretivas/ChecaPermissaoDirective';
import { HttpErrorHandler } from './error.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LayoutComponent } from './layout/layout.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { SelectEstadosComponent } from './select-estados/select-estados.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

registerLocaleData(localePt, 'pt');

@NgModule({
  imports: [
    RouterModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    ConfirmDialogComponent,
    LimitToPipe,
    LocalDatePipe,
    YesNoPipe,
    LayoutComponent,
    ContainerComponent,
    MensagemComponent,
    SelectEstadosComponent,
    FileUploadComponent,
    ChecaPermissaoDirective,
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextareaComponent,
    InputSelectComponent,
    SelectAnoComponent,
    SelectPeriodoComponent,
    InputFileComponent,
    SelectMesComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    LimitToPipe,
    ConfirmDialogComponent,
    LocalDatePipe,
    YesNoPipe,
    ContainerComponent,
    MensagemComponent,
    SelectEstadosComponent,
    FileUploadComponent,
    FileUploadModule,
    MatIconModule,
    MatCheckboxModule,
    ChecaPermissaoDirective,
    NgxMaskModule,
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextareaComponent,
    InputSelectComponent,
    SelectAnoComponent,
    SelectPeriodoComponent,
    InputFileComponent,
    SelectMesComponent,
  ],
  entryComponents: [
    ConfirmDialogComponent,
    NgxMaskModule,
    ChecaPermissaoDirective,
  ],
  providers: [
    HttpErrorHandler,
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS,
    },
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class SharedModule {}
