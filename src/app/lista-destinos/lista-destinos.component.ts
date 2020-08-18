// @ts-ignore
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import {DestinosApiClient} from "../models/destinos-api-client.model";

// @ts-ignore
@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output()onItemAdded: EventEmitter<DestinoViaje>;

  constructor(public destinosApiClient:DestinosApiClient) {
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef-whitespace
  agregado(d:DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e:DestinoViaje) {
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
  }
}
