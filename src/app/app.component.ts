import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

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
    { Id: 3, firstName: "Bob", lastName: "Johnson" },
    { Id: 4, firstName: "Alice", lastName: "Lee" },
    { Id: 5, firstName: "David", lastName: "Nguyen" },
    { Id: 6, firstName: "Sarah", lastName: "Kim" },
    { Id: 7, firstName: "Michael", lastName: "Wong" },
    { Id: 8, firstName: "Karen", lastName: "Chen" },
    { Id: 9, firstName: "Alex", lastName: "Tan" },
    { Id: 10, firstName: "Emily", lastName: "Goh" },
    { Id: 11, firstName: "Peter", lastName: "Lau" },
    { Id: 12, firstName: "Grace", lastName: "Lim" },
    { Id: 13, firstName: "Jason", lastName: "Koh" },
    { Id: 14, firstName: "Linda", lastName: "Ng" },
    { Id: 15, firstName: "Tom", lastName: "Chua" }
  ];

  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      language: {
        searchPlaceholder: "Search Table Elements"
      },
    }
  }
}


