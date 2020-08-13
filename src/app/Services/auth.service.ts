import { Injectable } from '@angular/core';
import{ AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public user:firebase.User=null;
  constructor(private auth:AngularFireAuth, public route:Router) { }
  public async login(){
    try{
      let provider = new firebase.auth.GoogleAuthProvider();
      await this.auth.signInWithPopup(provider);
      this.user=await this.auth.currentUser;
      this.route.navigate(["/form"]);
    }catch(err){
      console.error(err);
    }
  }
  public async signout(){
    this.user=null;
    await this.auth.signOut();
    
  

  }
}
