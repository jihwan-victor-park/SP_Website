# Solomon & Park - College Applications Consulting

A premium college applications consulting website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Modern Design**: Yale-inspired color scheme with luxurious, professional styling
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Next.js 15 for optimal performance
- **Type-Safe**: Written in TypeScript for better code quality

## Pages

- **Home**: Company introduction, founders, and services overview
- **What We Offer**: Detailed explanation of services and methodology
- **Pricing**: Package options and investment information
- **Contact**: Contact form for inquiries

## Customization

### Adding Founder Photos

Replace the placeholder images in `components/Founders.tsx` with actual photos:

```tsx
<img
  src="/path-to-photo.jpg"
  alt="Founder name"
  className="w-full h-full object-cover"
/>
```

### Updating Colors

Colors can be customized in `tailwind.config.ts`:

- `yale-blue`: Main brand color
- `yale-light`: Lighter accent blue
- `gold`: Accent color for highlights

## Deployment

This site can be deployed on Vercel, Netlify, or any platform that supports Next.js.

For Vercel deployment:

```bash
npm run build
```

## License

© 2026 Solomon & Park. All rights reserved.
