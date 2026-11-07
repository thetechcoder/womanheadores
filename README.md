# The Woman He Adores

A private, offline-first guide for women who want a meaningful romantic relationship without people-pleasing or manipulation. It is a Progressive Web App (PWA): sixteen modules in five phases, with stories, frameworks, exercises, scenarios, an Ask library, a Life Audit and a before-and-after Readiness Snapshot.

Everything a user types stays on her own phone. There is no account, no server, no analytics and no tracking. The only network request the app makes by itself is loading its two fonts from Google Fonts (it falls back to system fonts offline). If she turns on the optional live-answers switch and adds her own API key, her question goes to Anthropic. That switch is off by default.

## What is in this folder

| File | Purpose |
| --- | --- |
| `index.html` | App shell and script loading |
| `styles.css` | All styling (light and dark) |
| `app.js` | The app: screens, saving, backup, lock, scenarios, Ask, snapshot |
| `data.js` to `data19.js` | All content: lessons, scenarios, Ask topics, Life Audit, readiness forms |
| `sw.js` | Service worker that makes it work offline |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | Install details and icons |
| `.github/workflows/pages.yml` | Publishes the site to GitHub Pages on every push to `main` |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

There is no build step and nothing to install. The files are served exactly as they are.

## Host it on GitHub Pages

1. Create a new GitHub repository (public, or private if your plan supports Pages on private repos).
2. Upload everything in this folder to the repository root, with `index.html` at the top level. Or from a terminal inside the folder:
   ```
   git init -b main
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-NAME/YOUR-REPO.git
   git push -u origin main
   ```
3. In the repository go to **Settings, then Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
4. Open the **Actions** tab. The "Deploy to GitHub Pages" run starts on its own and takes about a minute. When it is green, your address is `https://YOUR-NAME.github.io/YOUR-REPO/`.
5. Open that address on a phone and follow "Installing on a phone" below.

All file paths in the app are relative, so it works under a repository path like `/YOUR-REPO/` as well as on a custom domain.

### Custom domain (optional)

In **Settings, then Pages**, enter your domain and follow GitHub's DNS instructions. Use https. Choose your final address before you share the app, because see "Her data belongs to the address" below.

## Installing on a phone

The app must be opened over **https** for the offline feature and install prompt to work. GitHub Pages is https already.

- **iPhone (Safari):** open the address, tap Share, then **Add to Home Screen**. Do this before she starts, because Safari can clear a website's data after weeks of inactivity but not an installed Home Screen app's.
- **Android (Chrome):** open the address, then menu, then **Install app** (or **Add to Home Screen**).

On first open she creates a 6-digit lock code. It keeps casual eyes out. It does not encrypt her data and it cannot be recovered. If she forgets it she erases that copy and restores from a backup.

## Her data belongs to the address

Her progress lives in the browser storage of the exact web address she uses. That has three consequences:

- Changing the address (a new repository name, a new custom domain, `http` versus `https`) starts a fresh, empty copy. She must make a backup first and restore it at the new address.
- Updating the files at the same address keeps everyone's data. Older saves and backups load into newer versions.
- Clearing browser data erases it. Settings has **Export backup** (optional password, which cannot be recovered if forgotten). Encourage her to back up after each module.

## Updating the app

1. Edit the files and push to `main`. The workflow checks the JavaScript syntax and republishes.
2. **Always change the cache name** at the top of `sw.js` (for example `wad-shell-v21` to `wad-shell-v22`) whenever any file changes. Without this, phones keep showing the old files. If you add a new `dataNN.js`, also add it to `index.html` and to the file list in `sw.js`.
3. Phones pick up the update the next time they are online. Opening the app twice shows the new version.

## Testing

There is a checklist for trying it on a real phone before you share it. Start with a spare browser profile or second phone so no real data is at risk. To test the second Readiness Snapshot quickly, mark every lesson in Modules 1 to 12 complete (the second snapshot unlocks after 12 modules).

To run it locally: `python3 -m http.server 8000` in this folder, then open `http://localhost:8000`. Localhost is allowed to use the offline feature without https.

## Safety, privacy and content notes

- Health content gives no numbers or targets and defers to doctors. Money and legal content is general guidance only. Safety lines point to a trusted person, a local support service and the local emergency service; there are no country-specific hotline numbers.
- Abuse is never treated as a communication problem. The intimacy module is non-explicit and consent-centred. Nobody is pressured to convert or hide who they are.
- Stories use composite characters, each ending with a line saying so.
- Readiness Snapshot answers are stored, but scores are only calculated at the reveal. They are included in backups and kept out of the context summary.

## Licence

No licence is included yet, which means all rights are reserved by default. Before making the repository public, add a `LICENSE` file that says how others may use it.
