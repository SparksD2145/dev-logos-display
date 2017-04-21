import { Component } from '@angular/core';
import {LogolistService} from './logolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (logoService: LogolistService) {
    this.logos = logoService.getLogos();
  }

  logos = [];
}
