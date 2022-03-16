import { ViaCepModel } from './../../models/via-cep-model';
import { ViaCepApiService } from './../../services/via-cep-api.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {

  formContato: ViaCepModel ={};

  showForm = new Subject<boolean>();

  cepInput: string ='';

  constructor(private cepService: ViaCepApiService) { }

  ngOnInit(): void {

  }

  getViaCEP(cep: FocusEvent){
    if((cep.target as HTMLInputElement)?.value){
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      console.log(inputCEP);
      const cepResponse = this.cepService.getCep(inputCEP);
      cepResponse.subscribe(
        (cepModel) =>{
          this.formContato = cepModel;
          this.showForm.next(true);
        }
      )
    }
  }
}
