import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SocketService } from '../../../shared-services/src/public-api';
import { CRMAdminComponent } from './components/crm-admin/crm-admin.component';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterLink,RouterLinkActive],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [SocketService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crm';
  public messages: string[] = [];
  public messageToSend: string = ''; // Message that the user wants to send
  currentTime: string = ''; 
  isSidebarCollapsed:any=false;
  isLoading: boolean = true;
  searchQuery: string = '';
  constructor(private socketService: SocketService) {}


  isDropdownVisible = false;



  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

     // Simulate a loading delay (e.g., fetching data from API)
     setTimeout(() => {
      this.isLoading = false;
    }, 3000); 

      this.socketService.connect();
      this.sendMessage();
  }

  onSearch(): void {
    console.log('Search query:', this.searchQuery);
    // Add logic here to filter data or perform a search
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
}
