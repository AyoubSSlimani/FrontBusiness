import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politique',
  templateUrl: './politique.component.html',
  styleUrls: ['./politique.component.css'],
})
export class PolitiqueComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  RetourAccueil() {
    this.router.navigate(['accueil']);
  }
}
