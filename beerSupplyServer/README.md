# BeerSupplyServer

A simple server using Node.js + Express to support the mobile application.

## Steps

1. **Start the Server:**
   Open a new terminal at the root of the project and run:

   ```bash
   node server.js
   ```

This will start the server at ```http://localhost:3000```.

Ensure the server is up and running before proceeding to initialize the app.

## Considerations

A delay was added to responses to showcase the implementation of loaders. The application can run with or without the server running; the initial page won't load if the server is not running, displaying an error message. It's after the initial synchronization that the application's functionalities become enabled. Once this happens, the server can be turned on and off occasionally to explore different scenarios.