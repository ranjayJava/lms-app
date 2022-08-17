import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loan: Loan=new Loan;
  loanNumber: number=0;

  constructor(private loanService:LoanService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.loanNumber = this.route.snapshot.params['loanNumber'];

    if(this.loanNumber!=-1) {
      this.loanService.retrieveLoan(this.loanNumber)
          .subscribe (
            data => this.loan = data
          )
    
          }
  }



  saveLoan() {
    if(this.loanNumber == -1) { 
      this.loanService.createLoan(this.loan)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['loans'])
            }
          )
    }
          else {
          this.loanService.updateLoan(this.loanNumber, this.loan)
              .subscribe (
                data => {
                  console.log(data)
                  this.router.navigate(['loans'])
                }
              )
        }
    
    
  }

}
