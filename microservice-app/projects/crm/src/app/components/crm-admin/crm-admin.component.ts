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
  constructor(private socketService: SocketService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    // Example: Disconnect the socket connection
    if (this.socketService) {
      this.socketService.closeConnection(); // Call the cleanup method in the service
    }



}}
