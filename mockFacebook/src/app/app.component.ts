import { Component } from '@angular/core';
import { LogginService } from './loggin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mockFacebook';


  constructor(private logginService:LogginService){

  }

  variable = this.logginService.readSigIn()


}
