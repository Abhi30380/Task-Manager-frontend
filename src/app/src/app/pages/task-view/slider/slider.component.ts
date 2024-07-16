import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { WindowLocalStorageService } from '../../../../../service/local-storage.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [RouterModule ,RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  constructor(private windowLocalStorageService:WindowLocalStorageService,private router: Router){}
  username = this.windowLocalStorageService.getItem('username') || "kdflkdjf";
  onLogOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
