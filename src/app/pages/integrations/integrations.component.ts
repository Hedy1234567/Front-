import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css']
})
export class IntegrationsComponent {
  categories: string[] = [
    'All',
    'PMS',
    'Channel Manager',
    'Police Integration',
    'Payment',
    'OTAs'
  ];
  selectedCategory: string = 'All';

  integrations = [
    { name: 'Smoobu', logo: 'assets/images/Smoobu.webp', description: 'Complete property management system.', category: 'PMS' },
    { name: 'Guesty', logo: 'assets/images/Guesty.png', description: 'Streamlined hotel operations software.', category: 'PMS' },
    { name: 'Bookipro ', logo: 'assets/images/imagesbooki.png', description: 'Popular PMS used by global chains.', category: 'PMS' },
    { name: 'Planyo', logo: 'assets/images/Planyo.jpeg', description: 'Advanced booking system.', category: 'Channel Manager' },
    { name: 'IGMS', logo: 'assets/images/IGMS.png', description: 'Vacation rental management.', category: 'Channel Manager' },
    { name: 'Channex', logo: 'assets/images/Channex.png', description: 'Real-time channel sync.', category: 'Channel Manager' },
    { name: 'Siteminder', logo: 'assets/images/Siteminder.png', description: 'Top global channel manager.', category: 'Channel Manager' },
    { name: 'Rentals United', logo: 'assets/images/Rentals United.png', description: 'Distribution automation tool.', category: 'Channel Manager' },
    { name: 'AVS', logo: 'assets/images/AVS.png', description: 'Police guest reporting system.', category: 'Police Integration' },
    { name: 'eVisitor', logo: 'assets/images/eVisitor.jpeg', description: 'European police guest integration.', category: 'Police Integration' },
    { name: 'Emmar', logo: 'assets/images/Emmar.jpeg', description: 'Regional law enforcement integration.', category: 'Police Integration' },
    { name: 'Ubyport', logo: 'assets/images/Ubyport.png', description: 'Automated guest reporting.', category: 'Police Integration' },
    { name: 'Paymee', logo: 'assets/images/Paymee.png', description: 'Tunisian online payment gateway.', category: 'Payment' },
    { name: 'Flutterwave', logo: 'assets/images/Flutterwave.png', description: 'Popular in Africa.', category: 'Payment' },
    { name: 'PayPal', logo: 'assets/images/PayPal.png', description: 'Global online payments.', category: 'Payment' },
    { name: 'Stripe', logo: 'assets/images/Stripe.png', description: 'Powerful online payment infrastructure.', category: 'Payment' },
    { name: 'D17', logo: 'assets/images/D17.png', description: 'Local digital payment system.', category: 'Payment' },
    { name: 'PayZen', logo: 'assets/images/peyzen.png', description: 'Secure hotel payment integration.', category: 'Payment' },
    { name: 'Airbnb', logo: 'assets/images/airbnb.png', description: 'Short-term rentals and hosting.', category: 'OTAs' },
    { name: 'Booking.com', logo: 'assets/images/Booking.com', description: 'Major global travel OTA.', category: 'OTAs' },
    { name: 'Expedia', logo: 'assets/images/Expedia.jpg', description: 'Travel platform for hotels & flights.', category: 'OTAs' },
    { name: 'DirectBooking', logo: 'assets/images/DirectBooking.png', description: 'Encourages direct bookings.', category: 'OTAs' },
    { name: 'HomeAway', logo: 'assets/images/HomeAway.png', description: 'Vacation rental platform.', category: 'OTAs' }
  ];

  constructor(private location: Location) {}

  get filteredIntegrations() {
    if (this.selectedCategory === 'All') return this.integrations;
    return this.integrations.filter(i => i.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  connect(name: string) {
    alert(`Connecting to ${name}...`);
    // Future logic: Open modal / API call etc.
  }

  goBack(): void {
    this.location.back(); // Goes back to the previous page in history
  }
}
