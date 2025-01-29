const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const msg = JSON.parse(message);
    const { service, data } = msg;

    // Handle different services
    if (service === 'hr') {
      ws.send(JSON.stringify({ action: 'navigate', url: '/hr-admin' }));
    } else if (service === 'crm') {
      ws.send(JSON.stringify({ action: 'navigate', url: '/crm-admin' }));
    } else if (service === 'interface') {
      // ws.send(JSON.stringify({ action: 'navigate', url: '/interface-dashboard' }));
    } else {
      console.log('Unknown service:', service);
    }
  });

  ws.send(JSON.stringify({ message: 'Connected to WebSocket server' }));
});

console.log('WebSocket server is running on ws://localhost:8080');
