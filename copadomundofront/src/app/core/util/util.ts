import * as moment from 'moment';

export class Util {
  static base64ToArrayBuffer(base64: string) {
    const binaryString = window.atob(base64); // Comment this if not using base64
    const bytes = new Uint8Array(binaryString.length);
    return bytes.map((byte, i) => binaryString.charCodeAt(i));
  }

  public static blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    // A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    // Cast to a File() type
    return theBlob as File;
    // tslint:disable-next-line: semicolon
  };

  public static getBlob(documento: string): Blob {
    const arrayBufferPrograma = Util.base64ToArrayBuffer(documento);

    const blob = new Blob([arrayBufferPrograma]);
    return blob;
  }

  public static somenteNumeros(cpf) {
    const numeros = cpf.toString().replace(/\.|-/gm, '');
    return numeros;
  }

  public static dataFormatar(data: Date) {
    if (data != null) {
      return moment(data, 'YYYY-MM-DD').toDate();
    } else {
      return null;
    }
  }

  public static gerarUrlParaProcesso(numero: number, ano: number) {
    return `http://www.trt13.jus.br/protocolo-online/faces/pesquisa.do?central=0&numero=${numero}&ano=${ano}`;
  }

  public static loadPropriedades<Type>(suprimento) {
    const formData = new FormData();
    const array = Object.getOwnPropertyNames(suprimento);

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < array.length; i++) {
      console.log(typeof array[i]);
      if (typeof suprimento[array[i]] === 'string') {
        formData.append(array[i], suprimento[array[i]]);
      } else if (typeof suprimento[array[i]] === 'number') {
        formData.append(
          array[i],
          suprimento[array[i]] == null
            ? String(0)
            : String(suprimento[array[i]])
        );
      } else if (typeof suprimento[array[i]] === 'object') {
        const dataFormatada = Util.dataFormatar(suprimento[array[i]]);
        formData.append(array[i], String(dataFormatada));
      } else {
        console.log('chegou aqui');
      }
    }
    return formData;

    /*for()

    this.formData.append('cpfServidor', this.suprimento.cpfServidor);
    this.formData.append('nomeServidor', this.suprimento.nomeServidor);
    this.formData.append('finalidade', this.suprimento.finalidade);
    this.formData.append('numProcesso', String(this.suprimento.numProcesso));
    this.formData.append('anoProcesso', String(this.suprimento.anoProcesso));
    this.formData.append('dtConcessao', String(this.suprimento.dtConcessao));
    this.formData.append(
      'limite',
      this.suprimento.limite == null
        ? String(0)
        : String(this.suprimento.limite)
    );
    this.formData.append(
      'aplicado',
      this.suprimento.aplicado == null
        ? String(0)
        : String(this.suprimento.aplicado)
    );*/
  }
}
