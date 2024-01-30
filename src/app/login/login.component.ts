import { Component,OnInit, } from '@angular/core';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators,FormsModule} from '@angular/forms';
import { UserService } from '../user.service';
import { BrowserModule, } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  loginForm: FormGroup = new FormGroup({    
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService: UserService,private router:Router){}
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
     ]})
     
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginForm.value, null, 2));
    this.userService.login(this.loginForm.value)
    .then(res=>{
      console.log(res);
      this.router.navigate(['/admin'])
     })
    .catch(error=>error.message)
  }
  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }

}
