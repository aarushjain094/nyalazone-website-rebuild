# Nyalazone Website

This is the source code for the Nyalazone website, built with React.

---

## How to View the Website Locally

Follow these steps exactly, in order. You do not need any coding experience.

---

### Step 1: Install Node.js

Node.js is a program that runs the website code on your computer.

1. Go to [https://nodejs.org](https://nodejs.org)
2. Click the big green button labeled **"LTS"** (recommended for most users)
3. Download the installer and run it
4. Click **Next** through all the steps and then **Install**
5. When it finishes, click **Finish**

To confirm it installed correctly:
- On Windows: press `Win + R`, type `cmd`, press Enter
- In the black window that opens, type `node -v` and press Enter
- You should see a version number like `v20.x.x`

---

### Step 2: Download the Code

**Option A — If you received a ZIP file:**
1. Unzip the file to a folder (e.g., your Desktop)
2. Remember where you saved it

**Option B — If you have a GitHub link:**
1. Go to the GitHub page for this repository
2. Click the green **Code** button
3. Click **Download ZIP**
4. Unzip it to a folder you'll remember

---

### Step 3: Open the Folder in a Terminal

1. Open **File Explorer** and navigate to the folder where you unzipped the code
2. Click in the address bar at the top of the window (where it shows the folder path)
3. Type `cmd` and press Enter — a black terminal window will open
4. You should see a line ending in the folder name (e.g., `C:\Users\you\nyalazone-website-rebuild>`)

---

### Step 4: Install Dependencies

In the terminal window, type the following and press Enter:

```
npm install
```

This downloads all the files the website needs to run. It may take 1–2 minutes. Wait for it to finish.

---

### Step 5: Start the Website

In the same terminal window, type:

```
npm run dev
```

You will see some text appear. Look for a line that says something like:

```
Local:   http://localhost:5173/
```

---

### Step 6: Open the Website

1. Open your web browser (Chrome, Edge, Firefox, etc.)
2. In the address bar, type `http://localhost:5173` and press Enter
3. The website should appear

---

### Stopping the Website

When you are done, go back to the terminal window and press **Ctrl + C** on your keyboard. This stops the local server.

---

### Next Time

You do not need to reinstall Node.js or run `npm install` again. Just:
1. Open the terminal in the project folder (Step 3)
2. Run `npm run dev` (Step 5)
3. Open `http://localhost:5173` in your browser (Step 6)

---

## Live Site

**URL:** https://aarushjain094.github.io/nyalazone-website-rebuild/

To update the live site after making changes:
```
npm run deploy
```

This builds the project and pushes it to GitHub Pages. The live site does **not** update automatically — you must run this command each time.

---

## Changes vs. nyalazone.ai

### Navigation
- Breadcrumb bar on all non-home pages
- Prev / Next page navigation at the bottom of all product, offering, partner, and about pages
- Dropdown menus on Products, Offerings, Partners, and About Us

### Homepage
- Rotating hero title cycling through "Rapid Deployment", "Fit to Purpose", "Cost Efficient"
- Flagship Products section with animated gradient card linking to all 4 product pages
- Email capture form at the bottom (submissions go to info@nyalazone.com)

### Product & Offering Detail Pages
- 3-column layout with text on the left (2/3) and product image right-aligned (1/3)
- Highlights bar at the top of each product page (3 key stats)
- Animated gradient tagline on all offering pages and About Us
- Product logo + title displayed side by side in the page header

### Team & About
- Circular team member photos with LinkedIn links
- Clickable team member cards linking to individual detail pages (senior members)
- LinkedIn button on each team member detail page

### Resources
- Embedded MP4 video demos for AI Lead Management, Document Classifier, and Meeting Module
- Shareable Link button on each video card (copies direct video URL to clipboard)

### Careers
- Interest submission form (name, email, role, message) delivered to recruit@nyalazone.com

### Footer
- 3-column black footer with Products, Offerings, and About links
- LinkedIn company page icon link

---

## Codebase

| File | Purpose |
|------|---------|
| `src/content.ts` | All page content, product data, team members, navigation |
| `src/App.tsx` | All components and routing |
| `src/styles.css` | All styles |
| `src/main.tsx` | Entry point |
