import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FunctionGetterService} from "../service/function-getter.service";
import {Annonce} from "../models/annonce";


export class Carburant {
  constructor(
    public type: string
  ) {
  }
}

export class Marque {
  constructor(
    public designation: string
  ) {
  }
}


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {

  carburants: Carburant[] = [];
  annonces: Annonce[] = [];
  marques: Marque[] = [];
  name: object = this.marques.slice(0);



  selectedMarque?: Marque;
  onSelect(marque: Marque): void {
    this.selectedMarque = marque;
  }


  constructor(
    private functionGetter: FunctionGetterService
  ) {}

  ngOnInit(): void {
    this.functionGetter.getCarburant().subscribe(
      (response) => {
          this.carburants = response['hydra:member'];
      }
    );

    this.functionGetter.getAnnonce().subscribe(
      (response) => {
        this.annonces = response['hydra:member'];
        console.log(this.annonces)
      }
    );

    this.functionGetter.getMarque().subscribe(
      (response) => {
        this.marques = response['hydra:member'];
      }
    );

  }



}
