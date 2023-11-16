# PostIt2

PostIt2 is a social media platform that allows users to share pictures, connect with others, and engage
in a vibrant online community (lol).

https://post-it2.vercel.app/

## Table of Contents

1. [Technologies_Used](#technologies_used)
2. [Installation](#installation)
3. [Badges](#badges)
4. [Usage](#usage)
5. [Testing](#testing)

## Technologies_Used

- **Backend:**

  - Django
  - Django Rest Framework
  - PostgreSQL

- **Frontend:**

  - Next.js 14

- **Deployment:**
  - Backend API: Docker container deployed on Render
  - Database: PostgreSQL on Render
  - Frontend: Next.js static files hosted on Vercel

## Installation

### Prerequesites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Backend Setup

1. Clone the repository:

```
git clone https://github.com/Jkhall81/PostIt2.git
```

2. Navitage to the backend directory:

```
cd PostIt2/backend
```

3. Create a '.env' file and configure the following:

```
DJANGO_SECRET_KEY=your_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=postgres://your_db_username:your_db_password@localhost:5432/your_db_name
or configure your settings.py to connect to the Docker PostgreSQL container
```

4. Build and run the Docker containers:

```
docker-compose up
```

### Frontend Setup

1. Navigate to the frontend directory

```
cd PostIt2/client
```

2. install dependencies

```
npm i
```

3. Create a '.env.local' file and configure the following:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. Start the Next.js development server:

```
npm run dev
```

## Badges

Under construction. Sounds like a good idea but I've never done a badge before.

## Usage

1. Open your web browser and go to http://localhost:3000

2. Create a new account by providing your profile information.

3. Log in to access your account.

4. Post pictures with descriptions.

5. Like and comment on pictures from other users.

6. Search for users by username to explore their content.

7. Visit your profile page to see your information and posts.

## Testing

Under construction. Need to add testing to Django backend and Next.js frontend.
