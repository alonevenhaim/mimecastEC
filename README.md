# E-Commerce Site Cypress Testing

## Overview
This project contains Cypress tests for the e-commerce site "Sauce Demo". It includes tests for adding items to the cart, checking out, and handling empty carts.

## Setup
- Clone the repository
- Run `npm install` to install dependencies
- Run `npm install --save-dev cypress` to install dependencies

## Running Tests
- Execute `npm run cypress:open ` to open Cypress and run the tests interactively.
- Alternatively, run `npm run cypress:run ` for a headless execution.

## Tests
1. **Add to Cart and Checkout**: Tests the complete flow of adding items to the cart and completing the checkout process.
2. **Empty Cart Alert**: Tests the behavior of attempting to check out with an empty cart.

## CI/CD
Tests are automatically executed using GitHub Actions on every push to the repository. Artifacts from failed tests (screenshots, videos) are stored for analysis.
