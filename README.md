# Issue Tracker

This is a full-stack issue tracking application built with modern web technologies. It allows users to create, manage, and track issues, assign them to users, and filter them by status.

## Features

- **Issue Management**:
  - Create new issues with a title and description.
  - View a list of all issues with pagination.
  - View detailed information for a specific issue.
  - Update existing issues (edit title, description, status, assignee).
  - Delete issues.
- **User Authentication**:
  - Secure user sign-up and login functionality using NextAuth.js.
  - Only authenticated users can create, edit, and assign issues.
- **Issue Assignment**:
  - Assign issues to registered users.
  - Easily see who is responsible for addressing a particular issue.
- **Status Tracking & Filtering**:
  - Issues can have different statuses (e.g., Open, In Progress, Closed).
  - Visual status badges for quick identification.
  - Filter issues based on their current status.
- **Form Validation**:
  - Client-side and server-side validation for issue creation and updates to ensure data integrity.
- **Responsive Design**:
  - User interface built with Tailwind CSS, ensuring a seamless experience across devices (desktop, tablet, mobile).
- **API Endpoints**:
  - RESTful API for managing issues and users.
- **Loading States & Skeletons**:
  - Improved user experience with loading spinners and skeleton screens while data is being fetched.
- **Navigation**:
  - Clear and intuitive navigation bar.
  - Easy navigation between issue lists, issue details, and creation forms.

## Tech Stack

- **Framework**: Next.js (React framework for server-side rendering and static site generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Database ORM**: Prisma (with PostgreSQL, inferred from migrations)
- **Authentication**: NextAuth.js
- **API**: Next.js API Routes
- **Data Fetching/State Management**: React Query (for managing server state, caching, and background updates)
- **Form Handling**: Likely React Hook Form with Zod for validation (inferred from `validationSchemas.ts`)

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn
- A PostgreSQL database instance

### Installation

1.  **Clone the repository (if applicable):**

    ```bash
    git clone <repository-url>
    cd issue-tracker
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the necessary environment variables. This will typically include your `DATABASE_URL` for Prisma and NextAuth configuration (e.g., `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, and provider credentials).

    Example `.env` structure:

    ```env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="YOUR_VERY_SECRET_KEY_HERE"

    # Add any OAuth provider credentials if configured (e.g., GITHUB_ID, GITHUB_SECRET)
    ```

4.  **Run database migrations:**
    This will set up your database schema based on the Prisma schema file.
    ```bash
    npx prisma migrate dev
    ```

### Running the Application

1.  **Development Server:**
    To run the application in development mode with hot reloading:

    ```bash
    npm run dev
    # or
    # yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

2.  **Build for Production:**
    To create an optimized production build:

    ```bash
    npm run build
    # or
    # yarn build
    ```

3.  **Start Production Server:**
    To serve the production build:
    ```bash
    npm start
    # or
    # yarn start
    ```

## Project Structure

```
app/                  # Next.js App Router: Pages, layouts, API routes
├── api/              # API route handlers
│   ├── auth/         # Authentication routes (NextAuth.js)
│   ├── issues/       # Issue-related API endpoints
│   └── users/        # User-related API endpoints
├── auth/             # Authentication configuration and client-side provider
├── components/       # Reusable UI components
├── issues/           # Pages and components related to issues
│   ├── [id]/         # Dynamic route for individual issue details and editing
│   │   └── edit/     # Page for editing an issue
│   └── new/          # Page for creating a new issue
├── layout.tsx        # Root layout
├── page.tsx          # Homepage
├── globals.css       # Global styles
└── theme-config.css  # Theme configuration (e.g., for Radix UI)
prisma/               # Prisma ORM configuration
├── migrations/       # Database migration files
├── schema.prisma     # Prisma schema definition
└── client.ts         # Prisma client instance
public/               # Static assets
middleware.ts         # Next.js middleware (e.g., for route protection)
next.config.js        # Next.js configuration
package.json          # Project dependencies and scripts
tailwind.config.ts    # Tailwind CSS configuration
tsconfig.json         # TypeScript configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

_(Further details on contributing, code style, and testing can be added here.)_
