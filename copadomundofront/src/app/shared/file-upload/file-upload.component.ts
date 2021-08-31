import { HttpClient } from "@angular/common/http";
import { Component, Output, EventEmitter} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-file-upload',
  templateUrl: "file-upload.component.html",
  styleUrls: ["file-upload.component.css"]
})

export class FileUploadComponent {

    fileName = '';
    descricao = '';
    exibirCampoDescricao = false;
    formFileUpload : FormGroup;
    file: File;

    @Output() arquivoEnviado = new EventEmitter<File>();

    constructor(private http: HttpClient, private formBuilder: FormBuilder) {
      this.formFileUpload = this.formBuilder.group({
        descricaoArquivo : [null, [Validators.required]]
      })
    }

    onInit(){

    }

    onFileSelected(event) {

        const file:File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            this.file = file;
            //const formData = new FormData();
            this.arquivoEnviado.emit(file);
            //formData.append("thumbnail", file);
            //const upload$ = this.http.post("/api/thumbnail-upload", formData);
            //upload$.subscribe();
        }
    }
}
