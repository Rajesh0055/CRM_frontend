import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketService } from '../../../../../shared-services/src/public-api';
import { CommonModule } from '@angular/common';
import{  Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-crm-admin',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './crm-admin.component.html',
  styleUrl: './crm-admin.component.css'
})
export class CRMAdminComponent implements OnInit, OnDestroy {
  public messages: string[] = [];
  public messageToSend: string = ''; // Message that the user wants to send
  currentTime: string = ''; 
  isSidebarCollapsed:any=false;
  isLoading: boolean = true;
  constructor(private socketService: SocketService) {
   
   }
  ngOnInit(): void {
  //  this.updateTime();
    setInterval(() => this.updateTime(), 1000);

     // Simulate a loading delay (e.g., fetching data from API)
     setTimeout(() => {
      this.isLoading = false;
    }, 3000); 
      this.socketService.connect();
      this.sendMessage();
  }


userActivity= [{title:"💰 Total Client" , prize:"$25,000" },{title:"🧑‍🤝‍🧑 Total Revenue" , prize:"$120" },{title:"📈 Total Ticket" , prize:"$50,000" },]




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
    // Example: Disconnect the socket connection
    if (this.socketService) {
      this.socketService.closeConnection(); // Call the cleanup method in the service
    }
    



}}
