import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})


export class Game implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}

