import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css'],
})
export class AproposComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  RetourAccueil() {
    this.router.navigate(['accueil']);
  }
}
