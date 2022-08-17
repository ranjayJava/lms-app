import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

   API_URL = "http://localhost:8080/loans";
   private searchUrl = 'http://localhost:8080/search'

  constructor(private http:HttpClient) { }

  retrieveAllLoans() {
    return this.http.get<Loan[]>(`${this.API_URL}`);
    
  }

  deleteLoan(loanNumber: number){
    return this.http.delete(`${this.API_URL}/${loanNumber}`);
  }

  retrieveLoan(loanNumber: number){
    return this.http.get<Loan>(`${this.API_URL}/${loanNumber}`);
  }

  updateLoan(loanNumber:number,loan:Loan){
    return this.http.put(
          `${this.API_URL}/${loanNumber}`
                , loan);
  }

  createLoan(loan:Loan){
    return this.http.post(
              `${this.API_URL}`
                , loan);
  }

  getLoanBySearch(firstName:string,lastName:string,loanNumber:number) : Observable<Loan[]>{
    return this.http.get<Loan[]>(`${this.searchUrl}?firstName=${firstName}&lastName=${lastName}&loanNumber=${loanNumber}`);
  }

}
