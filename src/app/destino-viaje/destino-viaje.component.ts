import { DestinoViaje } from './../models/destino-viaje.model';
// @ts-ignore
import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {

  // @ts-ignore
  @Input() destino: DestinoViaje;
  // tslint:disable-next-line: no-input-rename
  @Input('index') position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output()clicked: EventEmitter<DestinoViaje>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  ir(){
    this.clicked.emit(this.destino);
    return false;
  }

}
