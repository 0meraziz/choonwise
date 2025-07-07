# API Documentation

## Authentication

### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com"
    },
    "token": "jwt_token"
  }
}
```

### POST /api/auth/login
Login with existing credentials.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "bandcampUsername": "username"
    },
    "token": "jwt_token"
  }
}
```

## Users

### GET /api/users/profile
Get current user profile (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "bandcampUsername": "username"
  }
}
```

### PUT /api/users/profile
Update user profile (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token
```

**Request Body:**
```json
{
  "bandcampUsername": "new_username"
}
```

### POST /api/users/connect-bandcamp
Connect Bandcamp account (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token
```

**Request Body:**
```json
{
  "username": "bandcamp_username"
}
```

## Groups

### GET /api/groups
Get user's groups (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "group_id",
      "name": "My Music Group",
      "ownerId": "user_id",
      "members": [...]
    }
  ]
}
```

### POST /api/groups
Create a new group (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token
```

**Request Body:**
```json
{
  "name": "New Music Group"
}
```

### GET /api/groups/:id
Get group details (requires authentication and membership).

### POST /api/groups/:id/invite
Invite user to group (requires authentication and ownership).

**Request Body:**
```json
{
  "email": "friend@example.com"
}
```

## Bandcamp

### GET /api/bandcamp/sync/:userId
Sync Bandcamp data for user (requires authentication).

### GET /api/bandcamp/analysis/:groupId
Get group analysis (requires authentication and membership).

**Response:**
```json
{
  "success": true,
  "data": {
    "commonItems": [...],
    "sharingOpportunities": [...],
    "purchaseOptimizations": [...]
  }
}
```
