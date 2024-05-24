# VoteGuard

VoteGuard is a secure voting system developed using Node.js, Express.js, MongoDB, and JWT Authentication. This project allows users to sign up and log in using their Aadhar Card number and password, vote for candidates, and track vote counts in real-time. Admins have the ability to manage candidate information.

## Features

- **Secure Authentication**: Users sign up and log in using their Aadhar Card number and password for secure access.
- **Single Vote System**: Users can view the candidate list and vote once, preventing multiple votes.
- **Real-Time Vote Tracking**: Displays live vote counts for candidates, sorted by vote counts.
- **Admin Candidate Management**: Admins can add, update, and delete candidate information but are restricted from voting.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT Authentication**
- **Postman**
- **Bcrypt** for password hashing

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/saptaneel/voteguard.git
2.  **Navigate to the project directory**
   cd voteguard
3.**Install dependencies**
    npm install
4.**Set up environment variables**
Create a .env file in the root directory and add the following variables:
PORT=your_port_number
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

5. **Start the application**
   npm start


  ## API Endpoints
## Authentication ##
**Sign Up**

URL: /api/auth/signup
Method: POST
Description: Register a new user with Aadhar Card number and password.
Body Parameters:
json

{
  "aadharNumber": "string",
  "password": "string"
}
**Login**

URL: /api/auth/login
Method: POST
Description: Log in a user with Aadhar Card number and password.
Body Parameters:
json

{
  "aadharNumber": "string",
  "password": "string"
}
## Voting
**Get Candidates**

URL: /api/vote/candidates
Method: GET
Description: Retrieve the list of candidates.

**Vote**

URL: /api/vote
Method: POST
Description: Vote for a candidate (one vote per user).
Body Parameters:
json

{
  "candidateId": "string"
}

**Get Vote Counts**

URL: /api/vote/counts
Method: GET
Description: Retrieve the real-time vote counts for candidates.
## Admin
**Add Candidate**

URL: /api/admin/candidate
Method: POST
Description: Add a new candidate.
Body Parameters:
json

{
  "name": "string",
  "party": "string"
}
**Update Candidate**

URL: /api/admin/candidate/:id
Method: PUT
Description: Update candidate information.
Body Parameters:
json

{
  "name": "string",
  "party": "string"
}
**Delete Candidate**

URL: /api/admin/candidate/:id
Method: DELETE
Description: Delete a candidate.
