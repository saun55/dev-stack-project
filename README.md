# 🚀 Dev Stack

> A modern and responsive technology stack explorer built with React, TypeScript, and Tailwind CSS.

Dev Stack helps developers explore popular frontend, backend, database, language, styling, DevOps, and development tools — and build their own personalized technology stack.

## 🌐 Live Demo

🔗 **Live Website:** [Add your live demo link here]

## 📸 Preview

![Dev Stack Preview](./src/assets/banner-stack.png)

## ✨ Features

* 📱 Fully responsive design for mobile, tablet, and desktop
* 🧭 Responsive navigation bar
* 🚀 Modern hero/banner section
* 🔎 Explore technologies by category
* 💻 Technology cards with:

  * Technology icon
  * Category
  * Difficulty level
  * Rating
  * Badge
  * Description
* ➕ Add technologies to your personal stack
* 🚫 One technology per category
* 🗑️ Remove individual technologies from your stack
* 🧹 Remove all selected technologies
* 🔔 Toast notifications for stack actions
* 📊 Dynamic selected technology count
* 📦 Technology data loaded from JSON
* 🎨 Modern UI built with Tailwind CSS

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Icons
* React Toastify
* JavaScript
* HTML5
* CSS3

## 📂 Project Structure

```text
dev-stack/
├── public/
│   └── data.json
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── BannerSection/
│   │   ├── Technologies/
│   │   └── YourStack/
│   │
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📋 Technology Categories

The project includes technologies from different categories:

| Category | Examples                       |
| -------- | ------------------------------ |
| Frontend | React, Next.js                 |
| Backend  | Node.js, Express.js            |
| Database | MongoDB, PostgreSQL            |
| Language | JavaScript, TypeScript, Python |
| Styling  | Tailwind CSS                   |
| DevOps   | Docker, GitHub Actions         |
| Tools    | Git, GitHub, Vite              |

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/saun55/dev-stack.git
```

Go to the project directory:

```bash
cd dev-stack
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown in your terminal.

## 🎯 How It Works

1. Browse the available technologies.
2. Choose a technology from a category.
3. Add it to your stack.
4. Your selected technologies appear in the **Your Stack** section.
5. Remove individual technologies whenever needed.
6. Use **Remove All** to clear the complete stack.

## 📱 Responsive Design

Dev Stack is designed to work across different screen sizes:

* 📱 Mobile — single-column technology cards
* 📱 Tablet — two-column technology cards
* 💻 Desktop — three-column technology cards
* 📊 Responsive stack sidebar

## 🔔 Notifications

The application uses **React Toastify** to provide feedback when users:

* Add a technology
* Remove a technology
* Clear the entire stack
* Attempt an invalid stack selection

## 👨‍💻 Author

**Saun**

Full-Stack Web Developer from Bangladesh.

* GitHub: [@saun55](https://github.com/saun55)
* LinkedIn: [Shawon Ahmmed](https://www.linkedin.com/in/shawonahmmed)

