import{HttpClient} from "@angular/common/http";
import { Card } from "../Models/card.ts";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class CardService{
    baseUrl='https://localhost:7209/api/Card';
    constructor(private http:HttpClient){ }
    //Get all cards
    getAllCards():Observable<Card[]>{
        return this.http.get<Card[]>(this.baseUrl)
    }

    //add new card 
    addCard(card:Card):Observable<Card>{
        card.id="00000000-0000-0000-0000-000000000000"

    }

    //delete card
    deleteCard(id:string):Observable<Card>{
        return this.http.delete<Card>(this.baseUrl + "/" + id)
    };

    //update card
    updateCard(id:string):Observable<Card>{
        
    }
}