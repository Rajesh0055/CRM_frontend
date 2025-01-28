import { Component } from '@angular/core';
import { SocketService } from '../../../shared-services/src/public-api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule],
  providers: [SocketService] // Reference to the HTML template
})
export class AppComponent  {
  
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
