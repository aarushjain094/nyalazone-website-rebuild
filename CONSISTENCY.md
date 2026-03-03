Design Consistency Rules

1. Spacing is tokenized and reused.
- Use CSS spacing variables (`--space-1` through `--space-5`) instead of ad-hoc values.
- Keep section, card, and text spacing aligned to these tokens.

2. Typography is consistent.
- Body copy uses justified alignment for paragraph text.
- Maintain one global line-height baseline (`1.55`) for readable rhythm.

3. Component rhythm stays uniform.
- Use the same internal padding pattern for tiles/cards in similar contexts.
- Keep heading-to-content and content-to-content gaps consistent.

4. Motion is subtle and standardized.
- Product fade animations use one shared keyframe and stagger timing.
- Respect reduced-motion preferences.

5. Future edits.
- Any new section should adopt existing spacing and typography tokens first.
- Avoid introducing one-off spacing or text formatting unless explicitly requested.
