import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService, Client } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  searchQuery = '';
  clients: Client[] = [];

  constructor(private router: Router, private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  get filteredClients(): Client[] {
    return this.clients.filter(client =>
      client.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  viewClientDetails(client: Client) {
    this.router.navigate(['/client-reservation', client.id]);
  }

  goBack() {
    this.router.navigate(['../home']);
  }
}
