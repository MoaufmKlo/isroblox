<div align="center">
    <h1>isroblox</h1>
    <img alt="npm Version" src="https://img.shields.io/npm/v/isroblox?style=for-the-badge">
    <img alt="npm Downloads" src="https://img.shields.io/npm/dw/isroblox?style=for-the-badge">
    <br>
</div>

## Table of contents
- [Table of contents](#table-of-contents)
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)
- [Contributing](#contributing)

## About

1.1kB & dependency-free [Node.js](https://nodejs.org/) module to check if an IP belongs to Roblox.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install isroblox:

```bash
npm install isroblox
```

## Usage

```javascript
const isroblox = require("isroblox");

const isRoblox = await isroblox.check("128.116.72.112");
if (isRoblox) {
    console.log("IP belongs to Roblox!");
} else {
    console.log("IP does not belong to Roblox!");
};
```

## Links

- [npm](https://www.npmjs.com/package/isroblox)
- [GitHub](https://github.com/MoaufmKlo/isroblox)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
