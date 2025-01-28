import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocketService } from '../../../shared-services/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
    
  providers: [SocketService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crm';
  constructor(private socketService: SocketService) {}

  sendToHR(): void {
    const hrData = { message: 'Hello HR service!' };
    this.socketService.sendMessage('hr', hrData); // Send message to HR service
  }

  sendToCRM(): void {
    const crmData = { message: 'Hello CRM service!' };
    this.socketService.sendMessage('crm', crmData); // Send message to CRM service
  }
}
