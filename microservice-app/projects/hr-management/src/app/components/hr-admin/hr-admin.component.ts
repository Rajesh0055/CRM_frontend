import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from '../../../../../shared-services/src/public-api';

@Component({
  selector: 'app-hr-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hr-admin.component.html',
  styleUrls: ['./hr-admin.component.css']
})
export class HRAdminComponent implements OnInit, OnDestroy {
  public messages: string[] = [];
  public messageToSend: string = ''; // Message input
  currentTime: string = ''; 
  isSidebarCollapsed: boolean = false; // Sidebar state
  isLoading: boolean = true; // Loading indicator

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    // Simulate loading delay (e.g., API fetch)
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); 

    this.socketService.connect();
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }

  sendMessage(): void {
    if (this.messageToSend.trim()) {
      this.socketService.sendMessage('service-name', { content: this.messageToSend });
      this.messageToSend = ''; 
    } else {
      console.log('Message is empty');
    }
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  sendToHR(): void {
    this.socketService.sendMessage('hr', { message: 'Hello HR service!' });
  }

  sendToCRM(): void {
    this.socketService.sendMessage('crm', { message: 'Hello CRM service!' });
  }

  ngOnDestroy(): void {
    this.socketService.closeConnection();
  }
}
