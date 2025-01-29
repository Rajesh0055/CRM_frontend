import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: WebSocket | undefined;
  private messageSubject = new Subject<any>();

  constructor() {
    this.connect();
  }

  // Establish WebSocket connection
  connect(): void {
    if (!this.socket) {
      this.socket = new WebSocket('ws://localhost:8080'); // WebSocket Server URL
    }

    this.socket.onopen = () => console.log('Connected to WebSocket server');

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Message from server:', message);
      this.handleNavigation(message); // Handle navigation
      this.messageSubject.next(message);
    };

    this.socket.onerror = (error) => console.error('WebSocket error:', error);
    this.socket.onclose = () => console.log('WebSocket connection closed');
  }

  // Send message to the WebSocket server
  sendMessage(service: string, data: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({ service, data });
      this.socket.send(message);
      console.log('Message sent:', message);
    } else {
      console.error('WebSocket connection is not open or is undefined');
    }
  }

  // Function to handle navigation based on WebSocket messages
  private handleNavigation(message: any): void {
    if (message.action === 'navigate') {
      window.location.href = message.url; // Redirect to specified URL
    }
  }

  // Close WebSocket connection
  closeConnection(): void {
    if (this.socket) {
      this.socket.close();
    }
  }
}
