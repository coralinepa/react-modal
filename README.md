# @coralinepa/react-modal

A lightweight and customizable React modal component ✨  
Perfect for confirmations, dialogs, and alerts in your React applications.

![npm](https://img.shields.io/npm/v/@coralinepa/react-modal)
![license](https://img.shields.io/npm/l/@coralinepa/react-modal)
![react](https://img.shields.io/badge/react-17%2B-blue)

---

## 🚀 Installation

```bash
npm install @coralinepa/react-modal
```

or with Yarn:

```bash
yarn add @coralinepa/react-modal
```

---

## 🧩 Usage

```jsx
import React, { useState } from "react";
import { Modal } from "@coralinepa/react-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is your custom modal content.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
}
```

---

## ⚙️ Props

| Prop       | Type       | Required | Description                                      |
| ---------- | ---------- | -------- | ------------------------------------------------ |
| `isOpen`   | `boolean`  | ✅       | Whether the modal is visible                     |
| `onClose`  | `function` | ✅       | Function called when modal or overlay is clicked |
| `children` | `node`     | ✅       | Modal content                                    |

---

## 🎨 Customization

- You can style the modal with `styled-components`, Tailwind, or your own classes
- Default modal comes with basic layout and overlay
- Consider wrapping it in a design system or layout

---

## 📦 Package info

- **Framework:** React `>=17.0.0`
- **Bundler:** Vite (ESM + UMD)
- **Peer deps:** `react`, `react-dom`
- **License:** MIT

---

## 👩‍💻 Author

Made with ❤️ by Coraline Parreau

[GitHub Repository](https://github.com/coralinepa/react-modal)

---

## 📝 License

MIT
