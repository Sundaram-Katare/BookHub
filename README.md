# BookHub - A Bookshelf App

- BookShelf is a MERN stack web application where users can view, add, and explore books added by others. 
- Each book displays who added it, and clicking on a book reveals its author and cover image in a modal. Authentication is required to add books.

---

## ✨ Features

- 🔐 User authentication (JWT-based)
- 📖 View list of books with contributor names
- 📌 Click any book to see author & cover image in a popup
- ➕ Authenticated users can add new books
- 📦 Built with React, Tailwind CSS, Node.js, Express, MongoDB

---

## 🚀 Live Demo

[https://book-hub-seven-smoky.vercel.app/](#)

---

## 📷 Preview

<img width="1902" height="905" alt="image" src="https://github.com/user-attachments/assets/ec53c019-8a73-49f2-91ab-7dc9a198f459" />

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Auth:** JWT, bcryptjs

---

## 📁 Project Structure

```bash
BookShelf/
├── client/         # React frontend
├── server/         # Express backend
└── README.md
```

---

## Local Setup Instructions

1. Fork the repo
2. Clone the forked repo
```bash
  git clone https://github.com/your-username/BookHub.git
  cd BookHub
```
3. Setup Backend
   
 i)
```bash
   cd server
   npm install
```
ii) Create a .env
```bash
  PORT=5000 
  MONGO_URI="your-mongodb-connection-string"
  JWT_SECRET="your_jwt_secret"
```
iii) Run Server
```bash
 node server.js
```

4. Setup Frontend
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

Frontend will run at http://localhost:5173

Backend at http://localhost:5000

## 🧑‍🤝‍🧑 Contributing

Thank you for considering contributing to **BookHub App**! Whether you're fixing bugs, improving the UI, or adding new features — your contributions are highly appreciated. ❤️

---

### 📌 Start with Issues

Before jumping in, head over to the [**Issues**](../../issues) section of this repository.

✅ I’ve already created multiple issues that are ready to be picked up.  
🗨️ If you find an issue you'd like to work on, **comment** on it saying:  
`I want to work on this issue.`  
Then, you can start working on it. Once done, You can raise the PR for it.

✨ You’re also welcome to raise **new issues** if you spot a bug or have an idea for improvement — just make sure to provide enough context!

---

### 🚀 How to Contribute

Follow these steps to contribute to the project:

1. **Fork** this repository by clicking the **Fork** button on the top right.
2. **Clone** your forked repo to your local machine:

   ```bash
   git clone https://github.com/your-username/bookhub.git
   cd bookhub
   ```
3. Create a new branch for your feature or fix:
```bash
  git checkout -b your-feature-name
```

4. Make your changes in the codebase.
5. Stage and commit your changes:
```bash
git add .
git commit -m "feat: meaningful commit message"
```
6. Push your branch to your GitHub fork:
```bash
git push origin your-feature-name
```

7. Raise a Pull Request from your fork to the main branch of this repo.
Go to your fork on GitHub → Click Compare & pull request → Fill the PR form and submit.

---

## 📝 Tips for a Great Contribution
- Keep pull requests focused on one issue or feature.
- Add clear and concise commit messages.
- Share screenshots or video demos for UI changes (if applicable).
   
## 🙌 Thank You

Every contribution, no matter how small, brings value to this project and helps others learn.
Let’s build something awesome together! 🚀

---

## 🙋‍♂️ Maintainer
Sundaram Katare
Connect on:-
- Linkedin = https://www.linkedin.com/in/sundaram-katare5/
- Twitter = https://x.com/sundaramkatare

---

## 🫂 Contributors
- [Sundaram Katare](https://github.com/Sundaram-Katare)
- [anmolsah](https://github.com/anmolsah)
- [ErickJavier-creator](https://github.com/ErickJavier-creator)
