import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './mainn.component.html',
  styleUrls: ['./mainn.component.scss'],
})


export class Mainn implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}

