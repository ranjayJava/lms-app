import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-search',
  templateUrl: './loan-search.component.html',
  styleUrls: ['./loan-search.component.css']
})
export class LoanSearchComponent implements OnInit {

  firstName:string="";
  lastName: string="";
  loanNumber: number=0;
  loans: Loan[]=[];

  constructor(private loanService:LoanService,private router:Router) { }

  ngOnInit(): void {
  }

  getLoansBySearch(firstName:string,lastName:string,loanNumber:number) {
    this.firstName = firstName;
    this.lastName = lastName;
    loanNumber = this.loanNumber;
   this.loanService.getLoanBySearch(firstName,lastName,loanNumber).subscribe(data =>{
     this.loans=data;
   })

 }


}
