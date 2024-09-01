import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../extra/header/header.component";
import { LoadingServiceService } from '../services/loading-service.service';
import { SpinnerComponent } from "../extra/spinner/spinner.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SpinnerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
  loading = false;
  constructor(private loadingService:LoadingServiceService, private router:Router){
    this.router.events.subscribe(
      (event:any)=>{
        if( event instanceof NavigationStart){
          this.loadingService.show();
        }else if(event instanceof NavigationEnd || event instanceof NavigationCancel){
          this.loadingService.hide();
        }
      }
    )
  }
  

}
