import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.css'],
})
export class MentionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  RetourAccueil() {
    this.router.navigate(['accueil']);
  }
}
