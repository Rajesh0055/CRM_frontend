// src/app/common.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-common',
  standalone: true,
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {

  // Method to select a service and load its dashboard in iframe
  selectService(service: string) {
    const iframe = document.getElementById('serviceIframe') as HTMLIFrameElement;

    if (service === 'CRM') {
      iframe.src = 'http://localhost:4200/crm-dashboard';  // CRM service URL
    } else if (service === 'HR') {
      iframe.src = 'http://localhost:51185/hr-admin';  // HR service URL
    } else if (service === 'Public Interface') {
      iframe.src = 'http://localhost:4202/interface-dashboard';  // Public Interface service URL
    }
  }
}
