import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { MainPage } from '../../pages/pages';
import { HttpModule, Http } from '@angular/http';
//import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // account: { name: string, email: string, password: string } = {
  //   name: 'Test Human',
  //   email: 'test@example.com',
  //   password: 'test'
  // };
  variLoca : any;
  usi = {"usuario" : "" , "clave": "" , "nombre" : "" , "email" : "" }
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    //public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public authService: AuthServiceProvider,
    public http: Http )

    {
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    
    this.authService.postData(this.usi,"signup").then((result) => {
    this.variLoca = result;
    console.log(this.variLoca);
    localStorage.setItem('usi', JSON.stringify(this.variLoca) )
    this.navCtrl.push(MainPage);
  }, (err) => {
    //Conexion falla mensaje
    console.log("fallo");
  });


    // // Attempt to login in through our User service
    // this.user.signup(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    // }, (err) => {

    //    // TODO: Remove this when you add your signup endpoint

    //   // Unable to sign up
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }
}
