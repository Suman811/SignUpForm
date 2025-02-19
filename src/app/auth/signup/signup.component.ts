import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  

})
export class SignupComponent implements OnInit {


  ngOnInit(): void {

  }

  matchpassword() {

    const a = this.registrationForm.value.password;
    const b = this.registrationForm.value.confirmpassword;
    if (a != b) {
      this.mismatch = true;
      
    }
    else {
      this.mismatch = false;
    }
  }

  
  constructor(private fb:FormBuilder) {}
  registrationForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', Validators.required],
       gender:[''],
      selectedcountry : ['', Validators.required],
      selectedstate :['', Validators.required],
      password:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))]],
      confirmpassword:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))]]
    })
  // registrationForm = new FormGroup({
  //   firstname: new FormControl("", Validators.required),
  //   lastname: new FormControl("", Validators.required),
  //   email: new FormControl("", [Validators.email, Validators.required]),
  //   phoneNumber: new FormControl("", Validators.required),
  //   country: new FormControl("", Validators.required),
  //   state: new FormControl("", Validators.required),
  //   gender: new FormControl("", Validators.required),
  //   password: new FormControl(" ", [Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))]),
  //   confirmpassword: new FormControl(" ", [Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))])
  // })
  mismatch: boolean = false;

  countries =[ 
    {id:1,value:"India"},
    {id:2,value:"USA"},
    {id:3,value:"UK"},
    {id:4,value:"Canada"}
    
  ];
  
  states =[ 
    {id:1,value:"Punjab"},
    {id:2,value:"Haryana"},
    {id:3,value:"Himachal Pradesh"},
    {id:4,value:"Goa"}
    
  ];

  getControl(value:string){
    return this.registrationForm.get(value);
   }

phone(e:any){
  
    return e.charCode>=48 && e.charCode<=57;


}

  saveForm() {
debugger;
 if(this.registrationForm.valid){

let p = this.registrationForm.value.email || '';
let q = this.registrationForm.value.password || '';
console.log(this.registrationForm.value);
localStorage.setItem('email',p);
localStorage.setItem('password',q);
localStorage.setItem('formdata',JSON.stringify(this.registrationForm.value));


  }
  else{
    console.log("form is invalid");
  }
  
}
}

