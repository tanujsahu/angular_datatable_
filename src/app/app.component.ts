import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() { }

  cloumns = ['Id', 'firstName', 'lastName']
  employeeList = [
    { Id: 1, firstName: "John", lastName: "Doe" },
    { Id: 2, firstName: "Jane", lastName: "Smith" },
    { Id: 3, firstName: "Bob", lastName: "Johnson" }
  ];


  ngOnInit(): void { }

}
