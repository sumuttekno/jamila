# jamila
Websocket Javascript Client. Created for help developer make socket connection from javascript web client to websocket server.

## Prerequisites

Make sure that you understand about basic websocket and javascript concept

## How to use this library?

1. Clone this repository
2. Add this snippet code to your html

  ````javascript
   <script src="jamila/lib/websocket.js"></script>
   <script src="jamila/lib/event.js"></script>
   <script src="jamila/lib/abstract_connection.js"></script>
   <script src="jamila/lib/http_connection.js"></script>
   <script src="jamila/lib/websocket_connection.js"></script>
   <script src="jamila/lib/channel.js"></script>
   
   <script>
      var dispatcher = new Jamila('localhost:3000/websocket');

      dispatcher.trigger('new_message',{user_name: 'robin', msg_body: 'hello'}); // Trigger events using our JavaScript client.

      dispatcher.bind('new_message', function(message) { // Receive the response in the client.
        console.log(message);
      });
   </script>

  ````
  
  ## Credit where credit is due
  
  Big thanks to our contributors who have helped keep this project moving.
  New contributors and pull requests are always welcome.




