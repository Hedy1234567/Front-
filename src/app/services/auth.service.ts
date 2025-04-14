import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  // Méthode pour se connecter
  login(username: string, password: string): boolean {
    // Ici tu vérifies les identifiants, par exemple en appelant une API
    if (username === 'admin' && password === 'admin123') {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true'); // Sauvegarde de l'état de connexion
      return true;
    }
    return false;
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    // Vérifie si l'utilisateur est connecté (peut être basé sur le localStorage ou une variable)
    return this.isAuthenticated || localStorage.getItem('isLoggedIn') === 'true';
  }

  // Méthode pour se déconnecter
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn'); // Supprime l'état de connexion
    this.router.navigate(['/login']); // Redirige l'utilisateur vers la page de connexion
  }

  // Méthode pour obtenir les informations de l'utilisateur (optionnel)
  getUser(): any {
    return {
      username: 'admin' // Exemple d'un utilisateur, ici tu pourrais récupérer de vraies données
    };
  }
}
