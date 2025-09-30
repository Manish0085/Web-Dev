# JavaScript

## Why JavaScript?

### 1. JavaScript runs in the browser
- JavaScript is the only language natively supported by web browsers.
- Java and C++ cannot run directly inside a - browser; they are compiled or run on the server/desktop.
- Example: interactive buttons, dynamic forms, animations, live updates on a webpage → all done using JavaScript.

### 2. JavaScript is event-driven and dynamic
- JS was built for reacting to user actions in real time.
- C++ and Java are more static and compiled languages; they’re not optimized for this kind of dynamic UI behavior.
- Think: you click a button, and instantly the page updates without reloading → that’s JS.

### 3. Ecosystem for modern web development
- Frontend frameworks like React, Angular, Vue are all JavaScript-based.
- Backend frameworks like Node.js allow JS to run on the server too.

---

## How JavaScript Exexutes?

### 1. JavaScript is not natively “understood” by the CPU
- CPUs can only execute machine code.
- JS is a high-level language, so the browser cannot directly execute it.

### 2. Role of the JS engine (like V8)
- V8 is a program written in C++ that reads JS code and converts it into machine code.
- Steps inside V8:
    - Parsing: Converts JS text into an Abstract Syntax Tree (AST).
    - Compilation/Interpretation: Turns the AST into bytecode and then into optimized machine code using a Just-In-Time (JIT) compiler.
    - Execution: Runs the machine code on the CPU.

---

## What is V8Engine and it works?

This is nothing more than just like a c++ program which takes the JavaScript code as an input and process that and generates the output.

### Working

### Step 1: V8 itself is a compiled program
- V8 is written in C++ → so before you run it, it has already been compiled into machine code using a C++ compiler.
- This compiled V8 program is now just like any other executable on your computer.

### Step 2: V8 runs JS at runtime
- You give V8 some JS code (like console.log("Hi")).
- V8 interprets/compiles this JS code on the fly into machine code and executes it immediately.
- No C++ compilation happens here — V8 is already a running program, so it can generate machine code for JS directly.

### Step 3: Why no infinite loop of compilation?
- You might think: “C++ needs a compiler → V8 is C++ → so do I need C++ to run JS?”
- Answer: Only to build V8 the first time. Once V8 is compiled into a binary, it can run any JS code without needing C++ again.

---

##  Key Points to be Remember

- JavaScript is a Dynamicaly typed and High level Programming language.
- Automatic Garbage Collection.


---
