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
│   │   ├── /signin              # Sign-in page and form
│   │   ├── /signup              # Sign-up page and form
│   │   └── layout.tsx          # Layout for auth routes (e.g., center form, hide navbar)
│   │
│   ├── /success                # Post-auth success screen
│   ├── /middleware.ts          # Middleware for route protection
│   ├── /layout.tsx             # Root layout (providers, html/body)
│   ├── /page.tsx               # Landing or homepage
│   └── /favicon.ico            # App icon
│
├── /actions
│   ├── /auth                   # Server actions related to authentication
│   │   ├── signin.ts
│   │   ├── signup.ts
│   │   └── logout.ts
│   └── /[feature]              # (Optional) Group actions by route or feature
│
├── /components
│   ├── /auth
│   │   ├── auth-components.tsx # Shared auth logic or wrappers
│   │   ├── /signin             # Signin form component
│   │   ├── /signup             # Signup form component
│   │   └── /logout             # Logout form button
│   │
│   ├── /divider                # Decorative divider component
│   ├── /particles-bg           # Optional animated background
│   └── /ui                     # Shared UI primitives (button, input, label)
│
├── /lib
│   ├── prisma.ts               # Prisma client singleton
│   ├── session.ts              # Session management (e.g., Lucia helpers)
│   ├── email.ts                # Email validation or helpers
│   ├── password.ts             # Password hashing, validation
│   ├── validators.ts           # Zod schemas for input validation
│   ├── user.ts                 # User helpers (create/find user)
│   └── utils.ts                # Miscellaneous helpers
│
├── /prisma
│   ├── schema.prisma           # Prisma schema definition
│   └── /migrations             # Generated Prisma migration files
│
├── /public                     # Static assets (e.g., images, icons)
│
├── .env                        # Environment variables
├── .gitignore                  # Ignored files and folders
├── next.config.ts             # Next.js config (App Router, experimental opts)
├── tsconfig.json              # TypeScript settings
├── postcss.config.mjs         # PostCSS for Tailwind
├── eslint.config.mjs          # Linting rules
├── package.json               # Project dependencies and scripts
└── README.md                  # Project overview and setup instructions
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
