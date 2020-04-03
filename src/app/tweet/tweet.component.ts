import { Component, OnInit } from '@angular/core';
import {Tweet} from '../models/tweet.models';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

miTweet: Tweet;

  constructor() {
this.miTweet = {
  id: 1,
  texto: "hola    fghjk",
  autor:"Andres Rodriguez"
};
  }
  ngOnInit(): void {
  }

}
