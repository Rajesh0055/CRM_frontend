import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: WebSocket | undefined;

  constructor() {
    this.connect(); // Automatically connect when the service is instantiated
  }

  // Connect to the WebSocket server
  connect(): void {
    if (!this.socket) {
      this.socket = new WebSocket('ws://localhost:8080'); // WebSocket server URL
    }

    this.socket.onopen = () => {
      console.log('Connected to WebSocket server');

    };

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Message from server:', message);
      // Handle messages from the server here
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  // Send message to the WebSocket server
  sendMessage(service: string, data: any): void {
    // Check if socket is defined and open
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({ service, data });
      this.socket.send(message);
      console.log('Message sent:', message);
    } else {
      // If the socket is not open, log an error
      console.error('WebSocket connection is not open or is undefined');
    }
  }

  // Close the WebSocket connection
  closeConnection(): void {
    if (this.socket) {
      this.socket.close();
    }
  }
}
