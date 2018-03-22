import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  paraFlag: boolean;
  dateText: string;
  hobbies: string[];

  constructor() {
    this.paraFlag = true;
    this.dateText = "Hover on the button to see current date";
    this.hobbies = ['reading','music','dancing','travelling'];
  }

  togglePara() {
    this.paraFlag = !this.paraFlag;
  }

  seeDate() {
    this.dateText = new Date().toString();
  }

  resetText() {
    this.dateText = "Hover on the button to see current date";
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

  addHobby(){
    this.hobbies.push('new hobby');
  }

  resetHobbies(){
    this.hobbies = ['reading','music','dancing','travelling'];
  }

}
