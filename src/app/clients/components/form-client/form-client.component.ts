import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';


@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() init: Client;
  @Output() submited : EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  public states = StateClient;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.form = this.fb.group({

      name: [this.init.name,
        Validators.required],
      email: [this.init.email,
        Validators.compose([Validators.required, Validators.minLength(2)])],
      image: [this.init.image,
        Validators.required],
      state: [this.init.state]


    });
  }




  onClick(){
    this.submited.emit(this.form.value);
  }

}

