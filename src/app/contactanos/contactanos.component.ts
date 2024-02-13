import { Component,OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import * as emailjs from 'emailjs-com';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators,FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent implements OnInit{
  
  Form: FormGroup = new FormGroup({    
    email: new FormControl(''),
    name: new FormControl('')
  });
  submitted=false
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.Form=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000)
        ]
     ]})
     
  }
  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls;
  }
 
  sendEmail():void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      to_name: "Recipient Name",
      from_name: "Your Name",
      message: "This is a test email sent from Angular using EmailJS!"
    }, "YOUR_USER_ID")
    .then((response) => {
      console.log("Email sent successfully!", response);
    }, (error) => {
      console.error("Error sending email:", error);
    });
  }
}
