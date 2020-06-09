import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {

  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  @Input() worker: MyWorker;

  constructor() { }

  ngOnInit(): void {
    this.name = this.worker.name; //чтобы в полях были изначальные данные
    this.surname = this.worker.surname;
    this.type = this.worker.type;
  }

  onChangeWorker() {
    if (this.name && this.surname) {
      this.changeWorker();
      console.log(this.worker);
    }
    else alert("Заполните все поля");
  }

  changeWorker() {
      this.worker.name = this.name, //меняем данные работника на те что в полях
      this.worker.surname = this.surname,
      this.worker.type = this.type
  }
}
