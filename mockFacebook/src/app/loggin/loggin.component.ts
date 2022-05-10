import { Component, OnInit } from '@angular/core';
import { LogginService } from '../loggin.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
}) 
export class LogginComponent implements OnInit {

  constructor(private logginService: LogginService) { 

  }

  ngOnInit(): void {
  }
 
  Loggin = (e: Event) => {
    e.stopPropagation();
    console.log("presionado loggin");
    this.logginService.sigInOrLoggin("loggin");
  }

  SigIn(){
    
    console.log("presionado sigIn");
    this.logginService.sigInOrLoggin("sigIn");
  }

}
