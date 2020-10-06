import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrocoService } from './services/troco.service';
import { FormsModule } from '@angular/forms';
import { Valores } from './models/Valores';
import { Troco } from './models/Troco';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  title = 'Calcular Troco';

  @ViewChild('formTroco') formTroco: NgForm;

  valores: Valores;
  troco: Troco;

  constructor(private trocoService: TrocoService) { }

  ngOnInit(): void {
    this.valores = new Valores();
    this.troco = new Troco();
  }

  calcular(): void {

    if (this.formTroco.valid) {

      this.trocoService.calcular(this.valores)
      .subscribe(
        (_troco: Troco) => {
          this.troco = _troco;          
      }, err => {
        console.error(err);
      });                   

      console.log(this.troco);

    }
  }

}
