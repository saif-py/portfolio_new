# Portfolio website

This is a minimal, responsive portfolio website you can host on GitHub Pages.

How to use

1. Replace placeholder text (Your Name, bio, project links, email) in `index.html`.
2. Commit and push to GitHub.

Windows PowerShell commands (replace placeholders):

```powershell
cd 'c:\misc\projects\portfolio_new\portfolio_new'
git init ; git add . ; git commit -m "Initial portfolio" 
# create a repo on GitHub (use web UI or gh cli), then add remote:
# git remote add origin https://github.com/<your-username>/<repo>.git
git branch -M main ; git push -u origin main
```

Enable GitHub Pages

- Go to the repository on GitHub -> Settings -> Pages
- Select branch: `main` and folder: `/ (root)` then Save
- Your site will be published at `https://<your-username>.github.io/<repo>/`

Notes

- Update `index.html` with your projects, images, and links.
- To use a custom domain add a `CNAME` file with your domain and configure DNS.
