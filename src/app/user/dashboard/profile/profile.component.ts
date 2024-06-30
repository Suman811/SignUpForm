import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{


  showdata(){
let formdata = JSON.parse(localStorage.getItem('formdata')||'')
}
}
