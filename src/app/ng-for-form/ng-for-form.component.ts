import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: String = "";
  address: String = "";
  phone: String = "";
  city: String = "";
  age: number = 0;

  cities = [
    {name: "Sao Paulo", state: "SP"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Maceio", state: "AL"},
    {name: "Recife", state: "PE"}
  ];

  clients = []

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.city,  
        age: this.age,

      }
    );
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name = "";
    this.address = "";
    this.phone = "";
    this.city = "";
    this.age = 0;
  }


  delete(i: number) {
    //remover o elemento especifico no array clients
    this.clients.splice(i, 1);
  }

}
