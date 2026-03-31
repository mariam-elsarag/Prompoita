# Prompoita

## 📋 Overview

Prompoita is a platform where users can create, share, and discover prompts. Users can post prompts, browse prompts from other users or guests, copy prompts, and manage their own posts. Authentication is handled via NextAuth.

## ✨ Features

- **User Posts:** Users can create new prompts.
- **Search & Copy:** Guests or registered users can search for prompts and copy them.
- **Post Management:** Users can edit or delete their own posts.
- **Authentication:** User authentication and session management using NextAuth.

---

## 📷 Screenshots & Demo

### Home / Feed

![Home Feed](./screenshots/home-feed.png)  
Users can browse prompts, search by tags, and copy prompts to their clipboard.

### Profile / User Posts

![Profile Page](./screenshots/profile-page.png)  
Users can see their own prompts and have the ability to edit or delete them.

### Create / Edit Prompt

![Create Prompt](./screenshots/create-prompt.png)  
Authenticated users can create new prompts or edit existing ones.

---

## 🛠️ Tech Stack

- **Next.js** – React framework for frontend and server-side rendering
- **MongoDB & Mongoose** – Database for storing users and posts
- **NextAuth** – Authentication and session management

---

## Project Structure (overview)

```text
├── app/
│   ├── api/                # Next.js API routes
│   ├── components/         # React components
│   ├── _lib/               # Data service utilities
│   └── page.tsx            # Main pages
├── models/                 # Mongoose models
├── utils/                  # Helper utilities
├── .env.local              # Environment variables
├── package.json
└── README.md
```

---

## 🧪 Configure environment variables

Create a `.env` file in the project root (or set these variables in your deployment environment).

```bash
NEXT_PUBLIC_APP_URL=""

# google auth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# database
MONGODB_URI=""
MONGODB_PASSWORD=""

# config next auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=""

```

---

## ⚙️ Project Setup

Follow these steps to run the project locally:
1- Clone the repository:

```bash
git clone <repository_url>
```

2- Navigate to the project directory:

```bash
cd <project_directory>
```

3- Install dependencies:

```bash
npm install
```

4- Start the development server:

```bash
npm run dev
```

## Development (quick)

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:3000`).

## Build

```bash
npm run build
npm run start
```

## Usage Notes

- Only the creator of a post can delete or edit it.
- Other users can search for prompts and copy them to the clipboard.
- Authentication is handled via NextAuth, currently configured with Google OAuth.
