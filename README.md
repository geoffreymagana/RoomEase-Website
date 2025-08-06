
# RoomEase - Website

Welcome to the RoomEase website! This is a modern, responsive landing page and marketing website for RoomEase, a household management app designed to help roommates live together harmoniously.

## 🎨 Website Features

The RoomEase website showcases the app's capabilities with a beautiful, modern design:

- **Landing Page:** Compelling hero section with floating elements and sticky notes
- **About Page:** Company story, values, and team information
- **Pricing Page:** Transparent pricing plans with feature comparisons
- **Contact Page:** Easy way for users to get in touch
- **Download Page:** Platform-specific download options (Windows, Android, iOS)
- **Support Pages:** Help center, privacy policy, security information, and more
- **Responsive Design:** Optimized for all devices and screen sizes

## 🚀 Getting Started

To run this website locally, follow these simple steps:

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   The website will be available at `http://localhost:9002`

## 🛠️ Tech Stack

This website is built with modern, reliable technologies:

- **Framework:** [Next.js 15](https://nextjs.org/) (with App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Fonts:** Google Fonts (Inter, Space Grotesk, Architects Daughter)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Authentication pages
│   │   ├── login/         # Login page
│   │   └── join/          # Sign up page
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── download/          # Download page
│   ├── help/              # Help center
│   ├── pricing/           # Pricing page
│   ├── privacy/           # Privacy policy
│   ├── security/          # Security page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # Reusable components
│   ├── ui/                # ShadCN UI components
│   ├── footer.tsx         # Footer component
│   └── toaster-provider.tsx # Toast notifications
└── lib/                   # Utility functions
    └── utils.ts           # Common utilities
```

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with floating elements
- Feature showcase
- Testimonials
- Call-to-action sections

### Download Page (`/download`)
- Platform-specific download options
- Windows, Android, and iOS downloads
- Feature highlights for each platform

### Pricing Page (`/pricing`)
- Transparent pricing plans
- Feature comparisons
- Annual/monthly toggle

### About Page (`/about`)
- Company story and mission
- Team information
- Company values

## 🎨 Design Features

- **Modern Aesthetics:** Clean, professional design with subtle animations
- **Floating Elements:** Interactive sticky notes and cards on the homepage
- **Responsive:** Optimized for desktop, tablet, and mobile
- **Accessibility:** Built with accessibility best practices
- **Performance:** Optimized for fast loading times

## 🚀 Deployment

This website can be easily deployed to various platforms:

- **Vercel:** Recommended for Next.js projects
- **Netlify:** Great for static site generation
- **AWS Amplify:** For AWS integration
- **GitHub Pages:** For simple static hosting

## 📝 Customization

The website is designed to be easily customizable:

- **Colors:** Update the Tailwind CSS configuration
- **Content:** Modify page content in the respective page files
- **Components:** Add new components in the `src/components` directory
- **Styling:** Customize styles using Tailwind CSS classes

## 🤝 Contributing

Feel free to contribute to this website by:

1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for RoomEase - Making shared living harmonious and effortless.
