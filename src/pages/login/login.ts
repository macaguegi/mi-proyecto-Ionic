import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { MainPage } from '../../pages/pages';
import { MenuPage } from '../../pages/menu/menu';
import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  /*account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };*/

  // Our translated text strings
  private loginErrorString: string;
  variLoca : any;
  usi = {"usuario" : "" , "clave": "" }

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public authService: AuthServiceProvider) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    /*this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MenuPage);
    }, (err) => {
      this.navCtrl.push(MenuPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/


    this.authService.postData(this.usi,"login").then((result) => {
    this.variLoca = result;
    console.log(this.variLoca);
    localStorage.setItem('usi', JSON.stringify(this.variLoca) )
    this.navCtrl.push(MenuPage);
  }, (err) => {
    //Conexion falla mensaje
    console.log("fallo");
  });
  }
}
