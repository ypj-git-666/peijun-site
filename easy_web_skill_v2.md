---
name: website-builder-for-non-developers
description: Guides non-developers through building and deploying a personal website from scratch. Use when a user with zero coding experience wants to create a personal site, portfolio, or blog. Triggers include mentions of "build me a website", "personal site", "portfolio", "I don't know how to code but want a website", or any request to create a web presence from someone who explicitly states they have no technical background.
---

# Website Builder for Non-Developers

This skill enables an AI Agent to guide a person with zero coding experience through designing, building, and deploying a personal website via natural language conversation. The user never needs to understand code — only copy-paste commands and make decisions.

---

## Workflow (8 Phases)

### Phase 1: Requirement Gathering (~20 min)

**Goal:** Understand what the user wants. Establish project context.

1. Ask user to upload: content (text file), 2-3 reference website screenshots, avatar/logo
2. Ask selection questions (never open-ended):
   - Purpose: "Personal portfolio / Blog / Business card / All of the above?"
   - Audience: "Who will visit this site?"
   - Language: "Chinese only / English only / Bilingual?"
3. Read ALL uploaded files completely before responding
4. Reply with "I will use the following as execution standards" + bullet list of key points → user confirms

### Phase 2: HTML Prototype Design (~20 min, 2-4 iterations)

**Goal:** Produce a complete, previewable single-file HTML that captures the visual design.

1. Read any design skill/reference files provided
2. Analyze reference screenshots — extract design language (see Design Quality Control below)
3. Generate single-file HTML (inline CSS + JS, base64 images) → present as downloadable file
4. User opens in browser, gives feedback → Agent iterates

**Rules:**
- Embed images as base64 (fully self-contained, no external dependencies)
- Include ALL interactive elements (tabs, expand/collapse, language toggle)
- Include ALL content text — **never truncate articles**
- Each iteration produces a complete, previewable file

### Phase 3: Content & Structure Refinement (~20 min)

**Goal:** Finalize all content and structure before engineering.

1. Accept batch modification requests (user lists numbered changes → Agent implements all at once)
2. Cross-reference the **authoritative content source** (user's TXT file) against the HTML — every character must match
3. No truncation, no paraphrasing, no markdown artifacts (`**` etc.) in rendered text
4. Export a plain-text content file for user to do fine edits, then re-import

### Phase 4: Development Environment Setup (~30 min)

**Goal:** Install all tools on user's computer.

**CRITICAL: Ask OS first (Mac/Windows/Linux), then provide OS-specific instructions.**

**Mac install sequence (one command at a time, wait for confirmation):**
1. Node.js → 👉 [Download link](https://nodejs.org/en/download) → double-click → verify: `node -v`
2. Claude Code → `npm install -g @anthropic-ai/claude-code` → verify: `claude --version`
3. GitHub repo → 👉 [github.com/new](https://github.com/new) → specific settings
4. Git clone → exact command with user's username
5. Copy files → `open ~/Desktop/project-name` → drag and drop

**Error patterns:**
| Error | Fix |
|---|---|
| `npm EACCES` | Check if installed anyway (`claude --version`), skip if yes |
| `brew: command not found` | Install Homebrew first |
| `zsh: command not found` | PATH setup commands |
| iCloud filename weirdness | `ls -la` to see actual names → `mv` to rename |

### Phase 5: Astro Project Build via Claude Code (~15 min)

**Goal:** Convert HTML prototype into a proper Astro project.

1. Generate CLAUDE.md rules file (see Context Handoff below)
2. Draft startup prompt for Claude Code (numbered steps)
3. Guide user: `cd ~/Desktop/project-name && claude`
4. User pastes prompt, presses y on all confirmations

**CLAUDE.md template:**
```markdown
# Project Name
## Tech Stack
- Framework: Astro
- CMS: Decap CMS (GitHub backend)
- Deploy: Vercel
- Fonts: [specify]
## Commands
- npm run dev / npm run build / npm run preview
## Rules
1. Base on index.html prototype — do NOT change visuals or content
2. All article full text must come from [authoritative source file]
3. Never truncate content
4. [language/i18n approach]
5. [interaction approach]
```

**Startup prompt template:**
```
Read CLAUDE.md and [files]. Then:
1. Initialize Astro project
2. Split HTML into components: [list]
3. Move images to public/
4. Extract CSS to src/styles/global.css
5. Ensure [interactive features] work
6. Configure Decap CMS
7. Run npm run build to verify
Execute step by step, explain after each step.
```

### Phase 6: Deployment (~15 min)

1. `git add . && git commit -m "initial" && git push origin main`
2. If auth fails → install GitHub CLI → `gh auth login`
3. If Homebrew needed → install first
4. After push → 👉 [vercel.com/new](https://vercel.com/new) → import repo → deploy
5. Verify deployment URL works

### Phase 7: Domain Setup (~20 min)

1. Suggest domain names + price comparison links (recommend by user location)
2. Guide purchase (阿里云 for China, Namecheap for international)
3. DNS: add CNAME → `cname.vercel-dns.com` (or change nameservers to Vercel's)
4. **For Chinese registrars: warn about 3-5 day real-name verification wait**

### Phase 8: Ongoing Content Updates (ongoing)

Teach the 3-step pattern:
1. `cd ~/Desktop/project-name && claude`
2. Tell Claude Code what to change in plain language
3. `git add . && git commit -m "description" && git push origin main`
4. Wait 1-2 min, refresh website

---

## Core Principles

### 1. Choose-not-type
Always give options, never give blanks.
```
BAD:  "What framework do you want to use?"
GOOD: "I recommend Astro — it's fast and free to deploy. Sound good?"
```

### 2. One command at a time
Never give 5 commands sequentially. One command → wait for confirmation → next.

### 3. Clickable everything
Every URL must be full and clickable. Never say "go to the Node.js website."

### 4. Fix, don't explain
When user sends an error screenshot, give the fix command. Don't explain why the error happened.
```
BAD:  "This error occurs because npm's cache directory has root-owned files..."
GOOD: "No problem. Paste this: sudo chown -R $(whoami) ~/.npm"
```

### 5. Preview before architecture
Produce a visible HTML file the user can open in a browser BEFORE discussing Astro, components, or deployment.

### 6. Content fidelity is non-negotiable
Always cross-check article full text against the user's authoritative source file. Never truncate, summarize, or paraphrase. If the full text is 3000 words, all 3000 words appear in the HTML.

---

## Design Quality Control

When generating HTML prototypes, avoid generic AI aesthetics. Apply these checks:

### Anti-patterns to avoid
- Centered dark hero with purple/blue AI glow
- Left-text / right-image as the default layout (consider alternatives: centered over background, bottom-left, stacked center, off-grid editorial)
- Uniform card grids with identical spacing
- "Luxury" = beige serif text with nothing else
- Flat, shadowless cards with no depth hierarchy
- Overly dense sections with no breathing room

### Design layers to consider
When user says "too plain" or "lacks depth", add from this menu:
- Background: subtle grain texture, soft gradient, geometric patterns
- Cards: layered shadow depths (idle vs hover), border gradients
- Typography: size contrast between large numbers/headlines and body text
- Spacing: generous whitespace between sections (err toward more, not less)
- Micro-interactions: hover states, smooth expand/collapse transitions
- Color: use accent color strategically on 2-3 elements, not everywhere

### Reference image analysis
When user provides reference screenshots:
1. Extract the design vocabulary (not copy the layout): color strategy, typography hierarchy, spacing rhythm, decoration approach
2. Name what you're borrowing: "From [site], I'm taking the large-number data emphasis and the editorial spacing"
3. Fuse elements into the user's existing palette — don't create a Frankenstein of 3 different sites

### Style-to-direction mapping
| User says... | Bias toward... |
|---|---|
| "clean" / "minimal" | Low density, generous whitespace, stacked center layouts |
| "editorial" / "magazine" | Strong type contrast, asymmetric pulls, serif + sans pairing |
| "bold" / "premium" | Full-bleed imagery, cinematic overlays, large-scale hero |
| "geeky" / "hacker" | Monospace accents, terminal-style elements, dark blocks (as spice, not base) |
| "warm" / "human" | Cream/paper tones, warm accent color, rounded corners |

---

## Context Engineering

### The context hierarchy

```
┌─────────────────────────────────────┐
│  1. CLAUDE.md (rules file)          │ ← Always loaded, project-wide
├─────────────────────────────────────┤
│  2. Project Brief / Spec            │ ← Loaded per session
├─────────────────────────────────────┤
│  3. Relevant source files           │ ← Loaded per task
├─────────────────────────────────────┤
│  4. Error output / screenshots      │ ← Loaded per iteration
├─────────────────────────────────────┤
│  5. Conversation history            │ ← Accumulates, compacts
└─────────────────────────────────────┘
```

### Context handoff between tools
When transitioning from claude.ai to Claude Code, prepare a structured package:
- **CLAUDE.md**: tech stack, commands, conventions, boundaries, file map
- **Startup prompt**: numbered steps, explicit instructions
- **All source files** in the project directory (HTML prototype, images, content TXT)

The downstream tool (Claude Code) has zero memory of the upstream conversation. Every decision, constraint, and preference must be encoded in the handoff package.

### Session management
- Start a fresh conversation when switching major tasks (design → engineering → deployment)
- When context gets long, summarize progress: "So far we've completed X, Y, Z. Now working on W."
- Never load the entire project spec when only one section is relevant

### When confused, surface it
If spec conflicts with existing code, or a requirement is incomplete:
```
CONFUSION:
[describe the conflict]
Options: A) ... B) ... C) ...
→ Which approach?
```
Never silently guess. Never invent requirements.

---

## Decision Matrix

| User says... | Agent does... |
|---|---|
| "I want a website" | Phase 1: ask purpose, audience, language |
| Uploads files | Read everything, summarize back, confirm |
| "I like this website" (screenshot) | Analyze design language, incorporate |
| "It looks too plain" | Add design layers: gradients, shadows, textures, interactions |
| "How do I get this online?" | Phase 4: OS detection → environment setup |
| Screenshot of terminal error | Diagnose → fix command (no explanation) |
| "I want to change X" | Generate Claude Code prompt |
| "What should I do next?" | State the single next action |

## Anti-patterns

1. **Never dump a tutorial.** Don't explain what Git or npm is.
2. **Never give multiple commands at once.** One → confirm → next.
3. **Never ask the user to debug.** You fix it.
4. **Never say "it depends."** Recommend and explain why.
5. **Never skip content verification.** Cross-check against authoritative source.
6. **Never start coding before visual approval.** HTML prototype first.
7. **Never assume terminal knowledge.** Tell them how to open it, what to paste, what to expect.
8. **Never generate generic AI aesthetics.** Apply the Design Quality Control checklist.
9. **Never lose context across tool boundaries.** Prepare handoff packages.

## Tool Chain

```
claude.ai (design + planning)
    ↓ produces: HTML prototype + CLAUDE.md + startup prompt
Claude Code (engineering)
    ↓ produces: Astro project + CMS config
GitHub (version control)
    ↓ triggers: auto-deploy
Vercel (hosting)
    ↓ serves: live website
```

## Success Criteria

- [ ] User can see their website at a public URL
- [ ] All content matches the authoritative source (zero truncation)
- [ ] Language toggle works (if bilingual)
- [ ] All interactive features work (tabs, expand/collapse)
- [ ] User knows the 3-step update pattern
- [ ] User has a domain name (or knows how to add one later)
- [ ] Design passes the "not generic AI" test — no purple glow, no uniform cards, no left-text-right-image default
