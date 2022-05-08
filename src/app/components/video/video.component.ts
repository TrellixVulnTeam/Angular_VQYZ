import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})


export class Video implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}

