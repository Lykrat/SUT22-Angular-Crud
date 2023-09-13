import { Component } from '@angular/core';
import { Card } from './Models/card.ts';
import { CardService } from './Service/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SUT22-Angular';

  cards : Card[]=[];

  card : Card={
    id: '',
    cardNumber: '',
    expireMonth: '',
    expireYear: '',
    CVC: '',
    holderName: ''
  }

  constructor(private cardservice:CardService){

  }

  //Get
  getAllCard(){
    this.cardservice.getAllCards().subscribe(response=> this.cards = response)
  }

  //Add method
  onSubmit(){
    if(this.card.id==''){
      this.cardservice.addCard(this.card).subscribe(response=>{this.getAllCard();
      this.card={
        id :'',
        cardNumber:'',
        expireMonth:'',
        expireYear:'',
        CVC:'',
        holderName:''
      }
    }
    )
    }
    else{
      this.updateCard(this.card)
    }
  }
  
  //Update
  updateCard(card:Card){
    this.cardservice.updateCard(card).subscribe(response=>this.getAllCard());
  }
  
  //Delete
  deleteCard()

  populateForm(card:Card){
    this.card=card;
  }
}
