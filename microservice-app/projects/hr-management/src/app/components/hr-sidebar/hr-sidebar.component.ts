import { Component } from '@angular/core';
import { SocketService } from '../../../../../shared-services/src/public-api';

@Component({
  selector: 'app-hr-sidebar',
  imports: [],
  templateUrl: './hr-sidebar.component.html',
  styleUrl: './hr-sidebar.component.css'
})
export class HrSidebarComponent {
  isCollapsed = false;
    constructor(private socketService: SocketService) {}
    // Send navigation request via WebSocket
    navigate(service: string) {
      this.socketService.sendMessage(service, {});
    }

    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }

}
