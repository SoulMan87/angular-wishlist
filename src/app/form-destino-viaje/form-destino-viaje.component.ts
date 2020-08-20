import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;
  minLongitud = 3;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        this.nombreValidator
      ])],
      url: ['']
    });
    this.fg.valueChanges.subscribe((form: any) => {
      console.log('Cambio el formulario: ');
    });
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean {
    const d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }

  nombreValidator(control: FormControl): { [s: string]: boolean } {
    const longitud = control.value.toString().trim().length;
    if (longitud > 0 && longitud < 5) {
      return { invalidNombre: true };
    }
    return null;
  }

  nombreValidatorParametrisable(minLong: number): ValidatorFn {
    return (control: FormControl): { [s: string]: boolean } | null => {
      if (longitud > 0 && longitud < minLong) {
        return { minLongNombre: true };
      }
      return null;
    }
  }
}

