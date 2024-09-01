import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { log } from 'console';
import { MatchCardComponent } from "../../extra/matchCard/match-card/match-card.component";

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  allMatches:any;
  constructor(private service:ApiCallService){}
  ngOnInit(): void {
    this.service.getAllMatches().subscribe(
      (data:any)=>{
        this.allMatches=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
