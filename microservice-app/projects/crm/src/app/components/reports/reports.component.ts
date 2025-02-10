import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  reports = [
    { title: 'Total Sales', description: 'Revenue generated this month', value: '$25,000' },
    { title: 'New Customers', description: 'Customers joined this month', value: '120' },
    { title: 'Pending Orders', description: 'Orders yet to be shipped', value: '18' }
  ];

  // Chart Data
  chartLabels = ['January', 'February', 'March', 'April', 'May'];
  chartData = [
    { data: [10, 20, 30, 40, 50], label: 'Sales' }
  ];
}

