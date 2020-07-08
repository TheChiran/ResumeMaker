import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //icons
  faEdit = faEdit;
  faAdd = faPlus;
  faWeb = faGlobe;
  faEmail = faEnvelope;
  faPhone = faPhone;


  name:string='John Doe';
  nameInputStyle='none';
  nameAddBtnStyle='block';
  nameEditBtnStyle='none';
  title = 'resumeMaker';
  
  addName(){
    this.nameInputStyle='block';
  }
  setName(name){
    this.name=name;
    this.nameInputStyle='none';
    this.nameAddBtnStyle='none';
    this.nameEditBtnStyle='block';
    //console.log(this.name);
  }
  changeName(){
    this.nameInputStyle='block';
  }

  preview(){
    this.nameInputStyle='none';
    this.nameAddBtnStyle='none';
    this.nameEditBtnStyle='none';
  }
  edit(){
    this.nameAddBtnStyle='block';
  }
}
