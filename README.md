# Jagodowa Harmonia

A modern, responsive website for a clinical dietitian practice built with Next.js. The site features a clean design, parallax scrolling effects, and comprehensive information about nutrition services, consultations, and dietary plans.

## 🚀 Features

- **Modern Stack**: Built with Next.js 16, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Parallax Effects**: CSS-based parallax scrolling for engaging visual experience
- **Performance Optimized**: Server-side rendering and optimized font loading
- **SEO Friendly**: Comprehensive metadata, structured data (JSON-LD), and Open Graph tags
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **MailerLite Integration**: Newsletter and form integration ready

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: SCSS (Sass)
- **UI Components**: Custom components with BEM methodology
- **Icons**: React Icons
- **Animations**: Motion library
- **Fonts**: Google Fonts (Poppins)

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Accordion/      # Accordion component for collapsible content
│   ├── Button/         # Button component
│   ├── Footer/         # Footer component
│   └── Navbar/         # Navigation bar
├── sections/           # Page sections
│   ├── HeaderSection/  # Hero section with parallax background
│   ├── AboutSection/   # About section with competencies
│   ├── ServicesSection/# Services and offerings
│   ├── CooperationFormsSection/ # Cooperation options
│   ├── ReviewsSection/ # Client testimonials
│   └── ContactSection/ # Contact information and form
├── hooks/              # Custom React hooks
├── styles/             # Global styles and breakpoints
├── utils/              # Utility functions
├── layout.tsx          # Root layout with metadata
└── page.tsx            # Home page
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DawidZyluk/jagodowa-harmonia-next-js.git
cd jagodowa-harmonia
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local and add your MailerLite account ID
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses SCSS with BEM (Block Element Modifier) methodology for class naming. Global styles are defined in `app/globals.scss`, and each component/section has its own SCSS file.

### Breakpoints

Breakpoints are defined in `app/styles/_breakpoints.scss` for consistent responsive design.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_MAILERLITE_ACCOUNT_ID=your_account_id_here
```

You can copy `.env.example` to `.env.local` as a starting point.

### MailerLite

The MailerLite Universal script is included in the root layout (`app/layout.tsx`) and will be loaded on every page. The account ID is configured via the `NEXT_PUBLIC_MAILERLITE_ACCOUNT_ID` environment variable.

### Metadata

SEO metadata, Open Graph tags, and structured data (JSON-LD) are configured in `app/layout.tsx`. Update the metadata object to customize SEO settings.

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `sass` - CSS preprocessor
- `motion` - Animation library
- `react-icons` - Icon library

### Development
- `typescript` - Type safety
- `eslint` - Code linting
- `tailwindcss` - Utility-first CSS (optional)

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is private and proprietary.

## 👤 Author

Built for Jagodowa Harmonia - Clinical Dietitian Practice

---

For more information about Next.js, check out the [Next.js documentation](https://nextjs.org/docs).
