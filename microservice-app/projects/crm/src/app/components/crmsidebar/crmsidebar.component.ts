import { Component } from '@angular/core';
import { SocketService } from '../../../../../shared-services/src/public-api';

@Component({
  selector: 'app-crmsidebar',
  imports: [],
  standalone:true,
  templateUrl: './crmsidebar.component.html',
  styleUrl: './crmsidebar.component.css'
})
export class CRMSidebarComponent {

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
