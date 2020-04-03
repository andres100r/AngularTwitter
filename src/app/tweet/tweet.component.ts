import { Component, OnInit } from '@angular/core';
import {Tweet} from '../models/tweet.models';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {


  listaTweets = [];
  nuevoTweet: Tweet;
  
constructor(){
  this.nuevoTweet = {
    id: 0,
    texto: "",
    autor:""
  };


  let miTweet = {
  id: 1,
  texto: "hola    fghjk",
  autor:"Andres Rodriguez"
};
let miTweet2 = {
  id: 2,
  texto: "hola    fghjk",
  autor:"Andres Rodriguez2"
};
this.listaTweets.push(miTweet);
this.listaTweets.push(miTweet2);
console.log('lista', this.listaTweets);
}


adicionarNuevoTweet(){
  this.listaTweets.push(this.nuevoTweet);
}


  ngOnInit(): void {
  }

}
