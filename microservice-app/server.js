const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }); // WebSocket server running on port 8080

// Function to handle incoming WebSocket connections
wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // Listen for messages from clients
  ws.on('message', (message) => {
    const msg = JSON.parse(message); // Parse the incoming message
    const { service, data } = msg;

    // Route the message based on the service type
    if (service === 'hr') {
      handleHRService(ws, data);
    } else if (service === 'crm') {
      handleCRMService(ws, data);
    } else {
      console.log('Unknown service:', service);
    }
  });

  // Send a welcome message to the client upon connection
  ws.send(JSON.stringify({ message: 'Connected to WebSocket server' }));
});

// Handle HR service-specific logic
function handleHRService(ws, data) {
  console.log('HR Service:', data);
  // Respond with HR service-specific data
  ws.send(JSON.stringify({ service: 'hr', response: `HR Service Response: ${data}` }));
}

// Handle CRM service-specific logic
function handleCRMService(ws, data) {
  console.log('CRM Service:', data);
  // Respond with CRM service-specific data
  ws.send(JSON.stringify({ service: 'crm', response: `CRM Service Response: ${data}` }));
}

console.log('WebSocket server is running on ws://localhost:8080');
