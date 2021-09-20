import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Carburant, Marque} from "../accueil/accueil.component";
import {Annonce} from "../models/annonce";


@Injectable({
  providedIn: 'root'
})
export class FunctionGetterService {

  constructor(private httpClient: HttpClient) { }

  getCarburant() {
    return this.httpClient.get<any>('https://127.0.0.1:8000/api/type_carburants?page=1' )
  }

  getAnnonce() {
    return this.httpClient.get<any>('https://127.0.0.1:8000/api/annonces?page=1')
  }

  getMarque() {
    return this.httpClient.get<any>('https://127.0.0.1:8000/api/marques?page=1')
  }
}
