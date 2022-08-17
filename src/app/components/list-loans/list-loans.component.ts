import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.css']
})
export class ListLoansComponent implements OnInit {

  loans: Loan[] = [];
  message: string="";

  constructor(private loanService:LoanService,private router:Router) { }

  ngOnInit(): void {
    this.getAllLoans();
  }

  getAllLoans(){
    this.loanService.retrieveAllLoans().subscribe(
      response => {
        console.log(response);
        this.loans = response;
      }
    )
  }

  deleteLoan(loanNumber: number) {
    console.log(`delete Loan ${loanNumber}` )
    this.loanService.deleteLoan(loanNumber).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Loan ${loanNumber} Successful!`;
        this.getAllLoans();
      }
    )
  }

  updateLoan(loanNumber: number) {
    console.log(`update ${loanNumber}`)
    this.router.navigate(['loan',loanNumber])
  }

  addTodo() {
    this.router.navigate(['loan',-1])
  }
}
