**Clone the Repository:**
   ```bash
   git clone https://github.com/nooralamf42/fullstack-assignment.git
   cd fullstack-assignment/backend
   ```

**Install Packages**
```run :  npm install 
   ```

## Running the Application

Start the server:
```
node server.js or npm run dev
```

The server will start running on `http://localhost:3000`.

NO need to run mongodb in your system I have give my mongodb atlas db connection string, you can update MongoDB connection string in `config/database.js` if needed.

## API Endpoints

- `GET /ping`: Check if the server is running
- `POST /api/cards`: Create a new card
  - Request body: `{ "title": "Card Title", "description": "Card Description" }`
- `GET /api/cards`: Retrieve all cards
- `GET /api/cards/:title`: Retrieve a specific card by its title

## Error Handling

The API includes basic error handling
