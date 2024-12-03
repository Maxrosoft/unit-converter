# Unit Converter

https://roadmap.sh/projects/unit-converter

A web application built with **Node.js**, **Express**, **Bootstrap**, **Mocha**, **Winston**, and **EJS** to convert between units (length, weight and temperature). Includes a RESTful API for programmatic use.

## Features

- **Easy Unit Conversion**: Convert between various units.
- **REST API**: Programmatic access to conversion functionality.
- **Extensible**: Easily add new units and categories.
- **Responsive Design**: Clean UI with EJS templates.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Maxrosoft/unit-converter
   cd unit-converter
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```
4. Open in your browser: `http://localhost:3000`

## API Endpoints

- `GET /api/units` - List available units.
- `POST /api/convert` - Convert units (requires `value`, `from`, `to`).

## Technologies

- **Node.js**, **Express**
- **EJS** for templates
- **Bootstrap** for styling
- **Mocha** for testing
- **Winston** for logging

---

Feel free to tweak this to match your preferences! 🚀