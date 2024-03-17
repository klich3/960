---
layout: page
title: Development Guide

# Development Guide for 960.css

Welcome to the development guide for 960.css Grid Lightness Styles. This guide provides information on how to contribute, build, and extend the library for your projects.

## Contributing

If you are interested in contributing to the development of 960.css, follow these steps:

1. Fork the [960.css repository](https://github.com/klich3/960) on GitHub.
2. Clone your forked repository to your local machine:

   ```
   git clone https://github.com/your-username/960.git
   ```

3. Create a new branch for your changes:

   ```
   git checkout -b feature-name
   ```

4. Make your changes and commit them:

   ```
   git add .
   git commit -m "Add feature or fix"
   ```

5. Push the changes to your GitHub repository:

   ```
   git push origin feature-name
   ```

6. Create a pull request on the [original 960.css repository](https://github.com/klich3/960).

## Building from Source

If you want to build 960.css from source, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/klich3/960.git
   ```

2. Navigate to the project directory:

   ```
   cd 960
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the build command:

   ```
   npm run build:css
   ```

The compiled CSS files will be available in the `dist` directory.

## Testing

To run tests for 960.css, use the following command:

```bash
npm run test
```

## Development Scripts
Here are some useful scripts for development:

* Live preview: `npm run watch`
* Lint: `npm run lint`
* Lint fix: `npm run lint-fix`

Feel free to explore the source code, contribute to the project, and enhance the capabilities of 960.css Grid Lightness Styles.