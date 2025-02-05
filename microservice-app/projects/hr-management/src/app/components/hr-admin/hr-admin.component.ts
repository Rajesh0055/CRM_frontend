import { Component } from '@angular/core';
<<<<<<< HEAD
import { SocketService } from '../../../../../shared-services/src/public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hr-admin',
  imports: [CommonModule],
=======
import { HrSidebarComponent } from '../hr-sidebar/hr-sidebar.component'; // Import your sidebar component
import { SocketService } from '../../../../../shared-services/src/public-api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hr-admin',
  imports: [CommonModule],
  standalone:true,
>>>>>>> da5f0783c8cc063a04529f7154ebc07d84d4e4b5
  templateUrl: './hr-admin.component.html',
  styleUrl: './hr-admin.component.css'
})
export class HRAdminComponent {
  public messages: string[] = [];
  public messageToSend: string = ''; // Message that the user wants to send
  currentTime: string = ''; 
  isSidebarCollapsed:any=false;
  isLoading: boolean = true;
  constructor(private socketService: SocketService) { }

<<<<<<< HEAD
  constructor(private socketService: SocketService) { }
  public messages: string[] = [];
  public messageToSend: string = ''; // Message that the user wants to send
  currentTime: string = ''; 
  isSidebarCollapsed:any=false;
  isLoading: boolean = true;

=======
>>>>>>> da5f0783c8cc063a04529f7154ebc07d84d4e4b5
  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

     // Simulate a loading delay (e.g., fetching data from API)
     setTimeout(() => {
      this.isLoading = false;
    }, 3000); 
<<<<<<< HEAD
=======
    
>>>>>>> da5f0783c8cc063a04529f7154ebc07d84d4e4b5
      this.socketService.connect();
      this.sendMessage();
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }
  sendMessage(): void {
    if (this.messageToSend.trim()) {
      this.socketService.sendMessage('service-name', { content: this.messageToSend });
      this.messageToSend = ''; 
      console.log('Message is empty');
    }
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  ngOnDestroy(): void {
    this.socketService.closeConnection();
  }
<<<<<<< HEAD

  sendToHR(): void {
    const hrData = { message: 'Hello HR service!' };
    this.socketService.sendMessage('hr', hrData); // Send message to HR service
  }

  sendToCRM(): void {
    const crmData = { message: 'Hello CRM service!' };
    this.socketService.sendMessage('crm', crmData); // Send message to CRM service
  }
=======
  
>>>>>>> da5f0783c8cc063a04529f7154ebc07d84d4e4b5
}


