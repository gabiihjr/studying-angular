import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  transferencias: any[] = [];

  constructor(private service: TransferenciaService){

  }

  transferir($event: any){
    console.log($event);
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }
}
