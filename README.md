# Next.js router.push() Asynchronous Behavior

This repository demonstrates a common issue with Next.js's `router.push()` method: it doesn't guarantee that navigation is complete before executing subsequent code. This can lead to unexpected behavior if the code relies on the navigation being finished.

## Problem

The `router.push()` function is asynchronous.  The code after the `router.push()` call executes immediately, without waiting for the navigation to complete. This can cause problems when performing actions dependent on the navigation. For example, if you attempt to access DOM elements on the new page immediately after `router.push()`, those elements might not yet exist, causing errors.

## Solution

The most reliable solution is to use the `router.events` to listen for the `routeChangeComplete` event. This ensures that your code executes only after the navigation has been completely finished.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button. Notice that the console log happens before the page changes.
