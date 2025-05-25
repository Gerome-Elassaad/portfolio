---
Date: 2025-05-24
TaskRef: "Fix TypeScript errors in src/app/page.tsx related to 'technical' property and implicit 'any' types"

Learnings:
- Discrepancies between data structures in definition files (e.g., `content.js`) and consuming files (e.g., `page.tsx`) are a common source of 'property does not exist' errors in TypeScript.
- When renaming properties or restructuring data in a source file, all dependent components must be updated to reflect these changes in both property access and rendering logic.
- For example, renaming `techStacks` to `technical` and changing its internal structure from separate arrays (frontend, backend) to a single `skills` array required significant updates in `page.tsx`.
- Explicitly defining interfaces for complex objects (e.g., `TechnicalSkill`, `ImageProps`) and typing parameters in callback functions (e.g., `.map((item: Type, index: number) => ...)`) is crucial for catching type errors early and improving code maintainability.
- React list keys should be unique and stable. Using a combination of a unique property and index (e.g., `${skill.title}-${index}`) is a common pattern.

Difficulties:
- Initial modification of `content.js` (renaming `techStacks` to `technical` and restructuring) led to new errors in `page.tsx` because the old rendering logic for `techStacks` was still present and incompatible. This required a second pass on `page.tsx` to remove the obsolete code block and correctly implement the rendering for the new `technical.skills` structure.
- Overlooked the need to update the rendering logic in `page.tsx` for the `techStacks` (now `technical`) section in the first pass. The old code iterated over `frontend`, `backend`, `Integrations` separately, while the new structure is a single `skills` array.

Successes:
- Successfully identified that the `technical` property was missing from the `about` object in `content.js` and that `techStacks` was the intended data.
- Correctly refactored `content.js` to rename `techStacks` to `technical` and restructure its content into a `skills` array as expected by `page.tsx`.
- Updated `page.tsx` to use the new `about.technical` structure, added the `TechnicalSkill` interface, and provided explicit types for map callback parameters, resolving all reported TypeScript errors.
- The iterative approach of modifying, observing feedback (new errors), and then further refining proved effective.

Improvements_Identified_For_Consolidation:
- General pattern: When refactoring data structures, ensure all consuming code is updated simultaneously or in close succession to avoid cascading errors. Pay attention to both property access and rendering logic.
- TypeScript: Always define interfaces for shared object structures and use explicit types for function parameters, especially in callbacks.
---
---
Date: 2025-05-25
TaskRef: "Add Product Hunt embed to deeprankai.mdx and fix DOM property errors"

Learnings:
- When embedding HTML (like an iframe) in MDX/JSX, HTML attributes often need to be camelCased to be valid DOM properties in React.
  - `frameborder` should be `frameBorder`.
  - `allowfullscreen` should be `allowFullScreen`.
- The `style` prop in JSX expects a JavaScript object, not a string.
  - `style="border: none;"` should be `style={{border: "none"}}`.
- This is a common convention in React and similar JavaScript frameworks that use JSX.

Difficulties:
- Initially used standard HTML attribute casing (`frameborder`, `allowfullscreen`) which caused a "Invalid DOM property" error in the Next.js/React environment.
- Subsequently, used a string for the `style` prop, which caused an "Invalid `style` prop" error.

Successes:
- Successfully identified the casing issue from the error message.
- Correctly updated the attributes to `frameBorder` and `allowFullScreen` in the `iframe` tag within the `.mdx` file.
- Successfully identified the `style` prop issue from the error message.
- Correctly updated the `style` prop to use object syntax `style={{border: "none"}}`, resolving all errors.

Improvements_Identified_For_Consolidation:
- General pattern: When working with HTML elements in JSX/MDX:
    - Always use camelCase for multi-word attributes (e.g., `frameBorder`, `readOnly`, `autoPlay`, `allowFullScreen`).
    - The `style` prop must be an object (e.g., `style={{ marginRight: '10px', color: 'blue' }}`).
---
