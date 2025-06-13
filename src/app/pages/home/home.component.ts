import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role : any = '' 


   isAdmin(): boolean {
    return localStorage.getItem('role') === 'Admin';
    }

  constructor()
     {
}ngOnInit(): void {
    this.role = localStorage.getItem('role') ;

}
} ;
