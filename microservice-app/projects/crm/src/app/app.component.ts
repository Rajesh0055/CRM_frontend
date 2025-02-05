import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocketService } from '../../../shared-services/src/public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  standalone: true,
    
  providers: [SocketService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crm';
  public messages: string[] = [];
  public messageToSend: string = ''; // Message that the user wants to send
  currentTime: string = ''; 
  isSidebarOpen:any=false;
  loading: boolean = true;
  isProfileMenuOpen: boolean = false; // Added this to control profile dropdown

  constructor(private socketService: SocketService) {}
  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

     // Simulate a loading delay (e.g., fetching data from API)
     setTimeout(() => {
      this.loading = false;
    }, 1000); 
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

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout()
  {

  }

}
