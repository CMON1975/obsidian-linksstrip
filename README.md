# Linkstrip

**Linkstrip** is an Obsidian plugin that lets you quickly convert a `[[wikilink]]` into plain text. It’s ideal for writers who change their minds after quick-creating a link, want to remove links before exporting content, or anyone who prefers minimalist markdown.

---

## ✨ Features

- **Hotkey-driven**: Place your cursor inside any `[[wikilink]]`, press your chosen shortcut, and the brackets are gone.
- Zero configuration — install, set a hotkey, and you're done.
- Lightweight: no settings, no UI, just one powerful action.

---

## Getting Started

### 1. Installation

#### Community Plugins (Pending)
1. Open Obsidian → Settings → Community Plugins → Browse
2. Search for **Linkstrip**
3. Install and enable it
4. Assign a hotkey: Settings → Hotkeys → *"Strip Wikilink Under Cursor"*

#### Manual Installation (Dev/Test)

1. Clone or download this repository
2. Build it:
   ```bash
   npm install
   npm run build
   ```
3. Copy the output (`manifest.json`, `main.js`) into:
   ```
   <your-vault>/.obsidian/plugins/linkstrip/
   ```

4. Enable it via Obsidian → Settings → Community Plugins

---

## Usage

1. Open a note in **Edit Mode**
2. Move your cursor inside any `[[wikilink]]`
3. Use your assigned hotkey — I personally use **Alt + X**
4. The link will be stripped to plain text

---

## Development

You can build and test locally using:

```bash
npm install        # one-time setup
npm run build      # compile once
npm run watch      # auto-rebuild on changes
```

Uses [`esbuild`](https://esbuild.github.io) for blazing-fast builds.

---

## License

MIT © [Christopher Magnus Øvringmo Nilssen](https://github.com/CMON1975)

---

## Inspiration

There was no native or community plugin that offered this as a hotkey action. The intent is to minimize friction for markdown-centric writers.
