# Dr. Nikita - Dermatologist Website

A clean, minimalist website for a dermatology practice, inspired by zerodha.tech design principles. Features a blog section and WhatsApp appointment booking integration.

## Features

- Clean, minimalist design with focus on content
- Responsive layout that works on all devices
- Blog section with sample posts
- WhatsApp Business integration for easy appointment booking
- Ready for GitHub Pages deployment

## Setup Instructions

### 1. Configure WhatsApp Number

Before deploying, update the WhatsApp Business number in `script.js`:

```javascript
const WHATSAPP_NUMBER = '919876543210'; // Replace with actual number
```

Format: Country code + phone number (no + symbol or spaces)
Example: For +91 98765 43210, use `919876543210`

### 2. Customize Content

Update the following files with actual information:

- `index.html`: Doctor's name, credentials, clinic address, phone number
- `blog.html`: Add/remove blog posts as needed
- Create new blog posts in the `blog/` directory following the existing template

### 3. Deploy to GitHub Pages

1. Initialize a git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub (e.g., `dr-nikita-website`)

3. Push to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/dr-nikita-website.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Source", select "main" branch
   - Click Save

5. Your site will be live at: `https://YOUR_USERNAME.github.io/dr-nikita-website/`

### 4. Connect Custom Domain (Optional)

1. In your repository settings, go to Pages
2. Under "Custom domain", enter your domain name
3. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses
4. Enable "Enforce HTTPS"

Full instructions: [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## File Structure

```
.
├── index.html          # Homepage
├── blog.html           # Blog listing page
├── styles.css          # All styling
├── script.js           # WhatsApp integration
├── blog/               # Blog posts directory
│   ├── sunscreen-guide.html
│   ├── winter-skincare.html
│   └── acne-myths.html
└── README.md          # This file
```

## Adding New Blog Posts

1. Create a new HTML file in the `blog/` directory
2. Copy the structure from an existing blog post
3. Update the content
4. Add a link to the new post in `blog.html`
5. Optionally add it to the homepage preview in `index.html`

## Design Philosophy

Inspired by zerodha.tech:
- Minimalist, content-first design
- Black text on white background
- Generous whitespace
- Clear typography hierarchy
- No unnecessary animations or graphics
- Mobile-responsive

## Technologies Used

- Pure HTML5, CSS3, and vanilla JavaScript
- No frameworks or dependencies
- Optimized for fast loading
- SEO-friendly structure

## License

This template is free to use and modify for your dermatology practice.

## Support

For questions or issues with the website, please open an issue in the GitHub repository.
