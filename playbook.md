# Studio Ghibli Animation Playbook (2026)

Follow this repeatable workflow for every video to maintain a consistent brand and keep your channel monetized under the 2026 algorithm rules.

## Phase 1: AI Agent Initialization (What you ask ME to do)
For every new video, I will generate:
1. **The Script**: High-retention narrative using "Ma" concepts and pattern interrupts (zooms/pans every 45s).
2. **Visual Cues**: Specific [GHIBLI VISUAL] descriptors locked to your "Visual DNA."
3. **Sound Layering**: [SOUND EFFECT] cues for immersive foley.
4. **Monetization Markers**: Automatic placement of `[MARK: ALTERED CONTENT]`.

> [!TIP]
> **Variation Rule**: To avoid "Repetitious Content" flags, ask me to change the **Season** (Winter/Summer) or **Time of Day** for each new script.

---

## Phase 2: Asset Production (Your Toolkit)
1. **Voice**: 
   - *Paid*: ElevenLabs (Higher quality).
   - *Free*: **Google AI Studio (Gemini)** or **Luvvoice**.
2. **Keyframes**: 
   - *Paid*: Midjourney.
   - *Free*: **Leonardo.ai** (150 daily credits) or **SeaArt.ai**.
3. **Animation**: 
   - *Paid*: Runway Gen-3.
   - *Free*: **Kling AI** (66 daily credits) or **1min.AI**.

---

## Phase 3: The "Human-Signal" Edit (Manual Step)
YouTube’s 2026 reviewers look for evidence of a human editor. **Never just upload the raw AI export.**
1. **Overlay**: Add at least one manual text box or a custom title card you designed.
2. **Sound**: Drop in a low-volume background music track to sit under the AI voice and Foley.
3. **Glitch Check**: Skim for AI artifacts (e.g., extra fingers). If found, have the agent regenerate that 3-second block.

---

## Phase 4: Safe Upload Protocol
1. **Synthetic Media Label**: Check the "Altered or Synthetic Content" box in YouTube Studio.
2. **Metadata**: Ensure your description is 100% unique (don't copy-paste from the last video).
3. **Engagement**: Pin a comment asking a specific question once the video goes live.

---
## Phase 5: Git-Based Production Tracking
To keep your channel organized as you grow, use Git to track your "Version History":

1. **Branch per Video**: Instead of editing `script.md` directly, create a new branch for each video:
   - `git checkout -b video/01-doing-nothing`
2. **Commit as you go**: Once you finish the voiceover, commit the file. Once you finish the animation, commit the tracker update.
   - `git commit -m "Voiceover completed for Ep 01"`
3. **GitHub Issues**: Use GitHub Issues inside your repo to track "To-Do" items for each video. Label them as `voiceover`, `animation`, or `ready-to-upload`.

---
## My Recurring Instructions
"When you want a new video, just say: **'Write a new script for [Topic] in Ghibli style. [Summer/Winter] setting.'** I will then provide the full production package following this playbook."
