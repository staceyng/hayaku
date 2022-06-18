# hayaku
Rapidfire quiz game 


Things to try:
- Websocket, socket.io
- Logging library middleware pino
- Loader libraries (for waiting)

Steps:
1. Do up Game functionality first
   1. Create game and play single player
   2. Fetch random question and options
      1. get /question/:id endpoint
      2. post /question/:id endpoint to submit answer
      3. get /question/:id/score endpoint to reveal score
   3. Implement timer countdown bar and scoring
   4. Update game and proceed to next question