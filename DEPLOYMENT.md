# 🚀 Quick Deployment Guide

## Deploy to GitHub Pages in 3 Steps

### 1️⃣ Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "✨ Initial commit - Booking Hub landing page"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/booking-hub.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy

```bash
npm run deploy
```

That's it! The script will:
- Build your project
- Create a `gh-pages` branch
- Deploy the `dist` folder to GitHub Pages

### 3️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select `gh-pages` branch
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/booking-hub/`

---

## Other Deployment Options

### Netlify (Easiest)

1. Build: `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Done! ✨

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### Cloudflare Pages

1. Build: `npm run build`
2. Connect your GitHub repo to Cloudflare Pages
3. Build command: `npm run build`
4. Build output directory: `dist`

### Traditional Hosting (cPanel, etc.)

1. Build: `npm run build`
2. Upload contents of `dist` folder to your web server
3. Point your domain to that folder

---

## Custom Domain

After deploying to GitHub Pages:

1. In your repo settings → Pages → Custom domain
2. Add your domain (e.g., `bookinghub.com`)
3. Create a `CNAME` record in your DNS:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

---

## Troubleshooting

**Build fails?**
- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node -v` (should be 18+)

**Blank page after deployment?**
- Check browser console for errors
- Verify `base` path in `vite.config.ts` is set to `'./'`

**GitHub Pages not updating?**
- Clear browser cache
- Wait 2-3 minutes for GitHub to rebuild
- Check GitHub Actions tab for build status

---

**Need help?** Open an issue on GitHub!
