import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { JsonPipe } from '@angular/common';
import { MatchCardComponent } from "../../extra/matchCard/match-card/match-card.component";


@Component({
  selector: 'app-live',
  standalone: true,
  imports: [JsonPipe, MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {
constructor(private service:ApiCallService){}

liveMatches:any;

  ngOnInit(): void {
    this.getLiveMatches();
  }
  

  private getLiveMatches() {
    this.service.getLiveMathes().subscribe(
      (data: any) => {
        // console.log("working");
        this.liveMatches=data;

        console.log(data);

      },
      (error) => {
        console.log(error);

      }
    );
  }
}
