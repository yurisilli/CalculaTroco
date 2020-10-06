import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Troco } from '../models/Troco';
import { Valores } from '../models/Valores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrocoService {

  //URL = 'http://localhost:44396/calculatroco';  
  URL = 'http://localhost:5000/calculatroco';

  constructor(private http: HttpClient) { }

  calcular(valores: Valores): Observable<Troco> {
    
    console.log(valores);
    console.log(JSON.stringify(valores));
      
    return this.http.post<Troco>(`${this.URL}/calcular`, valores);        

  }

}
