import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css'],
})
export class ConditionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  RetourAccueil() {
    this.router.navigate(['accueil']);
  }
}
