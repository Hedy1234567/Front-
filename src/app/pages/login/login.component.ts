// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ← important
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,           // ← important avec Angular 17+
  imports: [FormsModule],     // ← pour utiliser [(ngModel)]
  templateUrl:  './login.component.html',
  styleUrls: ['./login.component.css']        // ← si tu utilises CSS
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const success = this.auth.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/home']);
    } else {
      alert('Identifiants incorrects !');
    }
  }
}
