import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';
  reactiveform! : FormGroup;

  ngOnInit(){
    this.reactiveform = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      country: new FormControl(''),
      hobbies: new FormControl('')
    });
  }
}
