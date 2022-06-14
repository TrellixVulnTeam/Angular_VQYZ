import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})


export class Spotify implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}

