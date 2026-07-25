---
# ── PROJECT TEMPLATE ────────────────────────────────────────────
# HOW TO ADD A PROJECT:
#   1. Make a copy of this file in the same folder (src/content/projects/).
#   2. Rename it, e.g. "park-cleanup-2026.md" (lowercase, dashes, no spaces).
#      The filename becomes the page web address: /projects/park-cleanup-2026
#   3. Fill in the fields below, write the story under the "---" line,
#      then change draft to false.
#   4. Save, commit and deploy.
#   5. If it does not appear locally, run:
#      npx astro dev stop && rm -rf .astro node_modules/.astro && npx astro sync && npm run dev
# ────────────────────────────────────────────────────────────────
title: Project title here
summary: One sentence shown on the projects list and cards.
categoryChecklist:             # mark [x] for each category that applies
  - '[ ] Habitat Restoration'
  - '[ ] Wildlife Protection'
  - '[ ] Litter Prevention'
  - '[ ] Waste Reduction'
  - '[ ] Urban Forest Restoration'
  - '[ ] Environmental Education'
  - '[ ] Community Volunteering'
  - '[ ] Environmental Advocacy'
  - '[ ] Community Partnerships'
status: past                   # past | ongoing | recurring | upcoming (shows as a badge)
location: Where it happened
date: 2026-01-01               # YYYY-MM-DD
# image: /images/projects/your_project_folder/your-photo.jpg   # optional — add photo under public/images/projects/
# imageAlt: Describe the photo for accessibility
# imageCredit: 'Photo: Jane Doe'           # optional — shown under the hero image
stats:                         # optional highlight numbers — delete this block if not needed
  - label: Trees planted
    value: '100'
    metric: trees              # optional key — rolls this number into the home-page impact strip
  - label: Volunteers
    value: '20'
    metric: volunteers
# METRIC KEY MAP (use the key in `metric:`; label text is your choice):
#   people      -> Residents reached / Students reached / Participants
#   volunteers  -> Volunteers involved
#   trees       -> Trees planted
#   plants      -> Native plants planted
#   litter      -> Bags of litter collected
#   grant       -> Grant funding (project-level)
#   events      -> AUTO on home page from `eventsHeld` (do not use as a stat metric)
#   schools     -> AUTO on home page from partner role `school` (deduped)
outcomes:                      # optional — what the project achieved (shown as a checklist)
  - Diverted 40kg of litter from the river
  - Engaged 12 local families in hands-on action
partners:                      # optional — supporters & partners (external endorsement)
  # Reference an organisation by its `id` from src/content/organisations.ts.
  # The name, URL and logo come from there — so no typos, no duplicates.
  # Add `role:` ONLY to override that org's default role for this project.
  - org: city-of-belmont       # uses the org's default role (funder)
  - org: belmont-city-college  # a school (default role: school)
  # KNOWN ORG IDS (add new ones in src/content/organisations.ts):
  #   city-of-belmont · keep-australia-beautiful-wa · zaneta-mascarenhas-mp
  #   cassie-rowe-mla · carnabys-crusaders · optus-stadium · ruth-faulkner-library
  #   millennium-kids · bunnings-belmont · belmont-city-college · kewdale-primary-school
  #   carlisle-primary-school · notre-dame-catholic-primary-school
  #   st-augustines-primary-rivervale
  # Roles (for the optional override): funder | partner | patron | supporter | school
gallery:                       # optional — extra evidence photos
  - src: /images/projects/your_project_folder/extra-1.jpg
    alt: Describe this photo
draft: true                    # set to false to publish
---

Write the project story here using plain text.

## Use headings like this

- Bullet points work too
- Add as many as you like

You can add [links](https://example.com) and **bold text**.
