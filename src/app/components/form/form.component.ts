import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'contact-us',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})


export class Form implements OnInit {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_oc18hkw', 'template_dek7grl', e.target as HTMLFormElement, 'NL5viIUx7IL-01Z5t')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    }
    constructor(public authService: AuthService) {}

    ngOnInit(): void {}
}

