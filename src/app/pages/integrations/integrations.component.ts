import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
    // PMS
    { name: 'PMS One', logo: 'assets/pms1.png', description: 'Complete property management system.', category: 'PMS' },
    { name: 'PMS Pro', logo: 'assets/pms2.png', description: 'Streamlined hotel operations software.', category: 'PMS' },
    { name: 'Opera PMS', logo: 'assets/opera.png', description: 'Popular PMS used by global chains.', category: 'PMS' },

    // Channel Manager
    { name: 'Planyo', logo: 'assets/planyo.png', description: 'Advanced booking system.', category: 'Channel Manager' },
    { name: 'IGMS', logo: 'assets/igms.png', description: 'Vacation rental management.', category: 'Channel Manager' },
    { name: 'Channex', logo: 'assets/channex.png', description: 'Real-time channel sync.', category: 'Channel Manager' },
    { name: 'Siteminder', logo: 'assets/siteminder.png', description: 'Top global channel manager.', category: 'Channel Manager' },
    { name: 'Rentals United', logo: 'assets/rentals-united.png', description: 'Distribution automation tool.', category: 'Channel Manager' },

    // Police Integration
    { name: 'AVS', logo: 'assets/avs.png', description: 'Police guest reporting system.', category: 'Police Integration' },
    { name: 'eVisitor', logo: 'assets/evisitor.png', description: 'European police guest integration.', category: 'Police Integration' },
    { name: 'Emmar', logo: 'assets/emmar.png', description: 'Regional law enforcement integration.', category: 'Police Integration' },
    { name: 'Ubyport', logo: 'assets/ubyport.png', description: 'Automated guest reporting.', category: 'Police Integration' },

    // Payment
    { name: 'Paymee', logo: 'assets/paymee.png', description: 'Tunisian online payment gateway.', category: 'Payment' },
    { name: 'Flutterwave', logo: 'assets/flutterwave.png', description: 'Popular in Africa.', category: 'Payment' },
    { name: 'PayPal', logo: 'assets/paypal.png', description: 'Global online payments.', category: 'Payment' },
    { name: 'Stripe', logo: 'assets/stripe.png', description: 'Powerful online payment infrastructure.', category: 'Payment' },
    { name: 'D17', logo: 'assets/d17.png', description: 'Local digital payment system.', category: 'Payment' },
    { name: 'PayZen', logo: 'assets/payzen.png', description: 'Secure hotel payment integration.', category: 'Payment' },

    // OTAs
    { name: 'Airbnb', logo: 'assets/airbnb.png', description: 'Short-term rentals and hosting.', category: 'OTAs' },
    { name: 'Booking.com', logo: 'assets/booking.png', description: 'Major global travel OTA.', category: 'OTAs' },
    { name: 'Expedia', logo: 'assets/expedia.png', description: 'Travel platform for hotels & flights.', category: 'OTAs' },
    { name: 'DirectBooking', logo: 'assets/directbooking.png', description: 'Encourages direct bookings.', category: 'OTAs' },
    { name: 'HomeAway', logo: 'assets/homeaway.png', description: 'Vacation rental platform.', category: 'OTAs' },
  ];

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
}
