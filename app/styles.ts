/**
 * Scoped CSS for the luxe-hair template.
 * EVERY selector must be prefixed with ".luxe-hair-demo" so the styles
 * cannot leak (this matters when the source is seeded into the builder).
 */
export const LUXE_HAIR_CSS = `
.luxe-hair-demo {
    --ink: #14141a;
    --paper: #ffffff;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
}
.luxe-hair-demo * { box-sizing: border-box; }
.luxe-hair-demo h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 0 0 1rem; }
`;