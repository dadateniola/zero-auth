# Zero Auth

A custom authentication system built from scratch using **Next.js**, **Prisma**, **ShadCN UI**, and **Lucia-inspired patterns**. This project explores the core mechanics of authentication—email/password and OAuth (Google, GitHub)—with full control over sessions and security.

---

## 🔥 Why "Zero Auth"?

The name reflects the philosophy of starting from _zero abstractions_. This isn't a plug-and-play auth library. Instead, **Zero Auth** is about understanding and owning every part of your authentication flow—from hashing passwords to integrating OAuth providers.

---

## 🛠️ Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **State & Actions**: [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- **Inspiration**: [Lucia Auth](https://lucia-auth.com/)

---

## ✨ Features

- ✅ Email + Password authentication
- ✅ Google OAuth login
- ✅ GitHub OAuth login
- ✅ Fully custom session management
- ✅ Database-backed user model (via Prisma)
- ✅ Form validation using [Zod](https://zod.dev/)
- 🔐 Built with security-first principles

---

## 🏗️ Project Goals

- Learn how authentication works under the hood
- Gain full control over auth flows and session storage
- Create a flexible foundation that can scale with any app
- Document every step for others to follow or contribute

---

## 📁 Folder Structure (Planned)

```
/zero-auth
│
├── /app
│   ├── /auth
│   │   ├── /login
│   │   │   └── page.tsx        # Login form (email/password + OAuth buttons)
│   │   ├── /register
│   │   │   └── page.tsx        # Registration form
│   │   ├── /callback
│   │   │   └── page.tsx        # OAuth redirect handler
│   │   └── /logout
│   │       └── action.ts       # Logout server action
│   │
│   ├── /dashboard
│   │   └── page.tsx            # Protected page shown after login
│   │
│   ├── /api
│   │   ├── /auth
│   │   │   └── /[provider]/route.ts  # OAuth redirect endpoints (e.g., Google, GitHub)
│   │
│   ├── /middleware.ts          # Auth protection middleware
│   └── page.tsx                # Home/landing page
│
├── /components
│   ├── AuthForm.tsx            # Reusable login/register form
│   ├── OAuthButtons.tsx        # Google/GitHub login buttons
│   ├── Navbar.tsx              # Top nav with auth status
│   └── ProtectedRoute.tsx      # Optional component-level guard
│
├── /lib
│   ├── auth.ts                 # Core logic: Lucia, OAuth config, session handling
│   ├── prisma.ts               # Prisma client
│   ├── validators.ts           # Zod validation schemas
│   └── utils.ts                # Miscellaneous utilities
│
├── /styles
│   └── globals.css             # Base styles + ShadCN integration
│
├── /prisma
│   └── schema.prisma           # DB schema (User, Session, etc.)
│
├── /public                     # Public assets (e.g., logos)
│
├── .env.local                  # Environment variables (API keys, secrets)
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind setup
└── README.md                   # Project overview and setup
```

---

## 🧪 Coming Soon

- Password reset
- Email verification
- OAuth UI theming
- Session expiration policies
- Provider linking (Google + Email, etc.)

---

## 🧠 Inspired By

- [Lucia Auth Docs](https://lucia-auth.com/)
- [NextAuth](https://next-auth.js.org/) — but simpler and more hands-on
- Security principles from OWASP

---

## 🧹 Want to Contribute?

This project is primarily for learning, but feedback and PRs are welcome as it grows into a full-fledged starter kit.
