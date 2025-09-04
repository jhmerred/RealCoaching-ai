/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "rc-fe-flax-vercel-app-arial-narrow":
          "var(--rc-fe-flax-vercel-app-arial-narrow-font-family)",
        "rc-fe-flax-vercel-app-noto-sans-KR-demilight":
          "var(--rc-fe-flax-vercel-app-noto-sans-KR-demilight-font-family)",
        "rc-fe-flax-vercel-app-noto-sans-KR-medium":
          "var(--rc-fe-flax-vercel-app-noto-sans-KR-medium-font-family)",
        "rc-fe-flax-vercel-app-semantic-button":
          "var(--rc-fe-flax-vercel-app-semantic-button-font-family)",
        "rc-fe-flax-vercel-app-semantic-cell-upper":
          "var(--rc-fe-flax-vercel-app-semantic-cell-upper-font-family)",
        "rc-fe-flax-vercel-app-semantic-code":
          "var(--rc-fe-flax-vercel-app-semantic-code-font-family)",
        "rc-fe-flax-vercel-app-semantic-data":
          "var(--rc-fe-flax-vercel-app-semantic-data-font-family)",
        "rc-fe-flax-vercel-app-semantic-heading-1":
          "var(--rc-fe-flax-vercel-app-semantic-heading-1-font-family)",
        "rc-fe-flax-vercel-app-semantic-heading-2":
          "var(--rc-fe-flax-vercel-app-semantic-heading-2-font-family)",
        "rc-fe-flax-vercel-app-semantic-heading-3":
          "var(--rc-fe-flax-vercel-app-semantic-heading-3-font-family)",
        "rc-fe-flax-vercel-app-semantic-input":
          "var(--rc-fe-flax-vercel-app-semantic-input-font-family)",
        "rc-fe-flax-vercel-app-semantic-item":
          "var(--rc-fe-flax-vercel-app-semantic-item-font-family)",
        "rc-fe-flax-vercel-app-semantic-label":
          "var(--rc-fe-flax-vercel-app-semantic-label-font-family)",
        "rc-fe-flax-vercel-app-semantic-link":
          "var(--rc-fe-flax-vercel-app-semantic-link-font-family)",
        "rc-fe-flax-vercel-app-semantic-options":
          "var(--rc-fe-flax-vercel-app-semantic-options-font-family)",
        "rc-fe-flax-vercel-app-semantic-textarea":
          "var(--rc-fe-flax-vercel-app-semantic-textarea-font-family)",
      },
    },
  },
  plugins: [],
};
