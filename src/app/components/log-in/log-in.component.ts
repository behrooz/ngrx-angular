import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user : User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
  }
}
