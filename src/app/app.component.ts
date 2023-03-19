import { Component, Inject, OnInit } from '@angular/core';

// import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'datatable';
  dtOptions: any; //Promise<DataTables.Settings>
  constructor() {
    // this.dtOptions: ;

  }

  people = [
    { Id: 1, firstName: "John", lastName: "Doe" },
    { Id: 2, firstName: "Jane", lastName: "Smith" },
    { Id: 3, firstName: "Bob", lastName: "Johnson" }
  ];


  ngOnInit(): void {
    this.dtOptions = this.people;
    console.log(this.people);
    console.log(this.dtOptions)

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
