# 🔢 Number Utilities – Part 2

This utility expands on foundational number operations by introducing more advanced and less frequently used methods, ideal for exploring edge-case 
behaviors in JavaScript. The UI mimics a retro terminal to reinforce a hacker-style learning experience.

---

## 🚀 Features

- 🧮 Apply 8 advanced number methods interactively
- 🧑‍💻 Retro terminal-styled UI (green-on-black monospace)
- 🧠 Understand the impact of `radix`, `clamp`, and safe integer ranges
- 🔁 Live dynamic feedback for input/output
- 🧾 Works with arrays (min/max) or single values (sign, clamp, etc.)

---

## 📚 Supported Operations

| Method               | Description                                                  |
|----------------------|--------------------------------------------------------------|
| `Number.isInteger()` | Checks if value is a valid integer                           |
| `Number.isSafeInteger()` | Checks if value is within safe JS range (`±2^53`)     |
| `Math.trunc()`       | Removes fractional part without rounding                     |
| `Math.sign()`        | Returns sign of number (`-1`, `0`, `1`)                      |
| `parseInt(str, radix)` | Parses number in given base (binary, hex, etc.)          |
| `Math.min(...args)`  | Finds the smallest number from comma-separated input         |
| `Math.max(...args)`  | Finds the largest number                                     |
| `Clamp`              | Custom logic to restrict value between min and max           |

---

## 🧪 Usage Instructions

1. Enter a number, numeric string, or comma-separated list.
2. Select an operation (like `clamp`, `min`, or `parseIntRadix`).
3. If required, enter additional parameter(s) (e.g., min/max, radix).
4. Hit **Run** and view real-time output in the styled terminal box.

---

## 💡 Example Use Cases

- `parseInt("ff", 16)` → converts hex to decimal → `255`
- `clamp(120, 0, 100)` → returns `100` since it's over the max
- `Math.min("5,3,8,1")` → returns smallest → `1`

---

## 🧱 Technologies Used

- React + Hooks (`useState`)
- CSS Modules with custom retro terminal theme
- Dynamic component rendering for multiple param inputs

---

## 🧠 Learning Outcomes

By using this utility, you'll understand:
- When `Number.isInteger()` vs `parseInt()` matters
- Why radix/base is important in parsing
- How clamping prevents overflow
- Handling multiple arguments with spread (`...`)

---

## 🖼 Preview
<img width="884" alt="Screenshot 2025-07-07 at 2 27 19 AM" src="https://github.com/user-attachments/assets/eac1d704-9826-4b47-b500-d8e18d0efd11" />
<img width="890" alt="Screenshot 2025-07-07 at 2 27 11 AM" src="https://github.com/user-attachments/assets/e65e7f8e-6933-462d-a28c-1d120b7ac45f" />
---
