import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
  imports:[CommonModule ]
})
export class LeadsComponent {
  leads = [
    { name: 'John Doe', email: 'john@example.com', phone: '9876543210' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '9123456789' }
  ];

  newLead = { name: '', email: '', phone: '' };

  addLead() {
    if (this.newLead.name && this.newLead.email && this.newLead.phone) {
      this.leads.push({ ...this.newLead });
      this.newLead = { name: '', email: '', phone: '' }; // Reset form
    }
  }

  deleteLead(index: number) {
    this.leads.splice(index, 1);
  }
}
