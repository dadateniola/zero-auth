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
/app
  /auth         → routes and forms for login/signup
  /api          → auth-related server actions and handlers
  /dashboard    → protected routes
/prisma
  schema.prisma → user/session models
/lib
  auth.ts       → auth logic (session handling, token validation)
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
