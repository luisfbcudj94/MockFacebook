import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {


  sigIn: boolean = false;
  constructor() { }

  sigInOrLoggin(action:string){
  
    if(action == 'loggin'){
      console.log("Acción: "+action);
    }
    else if(action == 'sigIn'){
      console.log("Acción: "+action);
      this.sigIn = true;
    }

    return this.sigIn;
    
  }

  readSigIn(){
    return this.sigIn;
  }
}
