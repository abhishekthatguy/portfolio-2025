# Theme & Style Utilities

This directory contains reusable theme and animation utilities that can be used across all components.

## Files

- **theme.js** - Theme-aware styling functions and constants
- **animations.js** - Framer Motion animation variants

## Usage

### Using Theme Styles

```jsx
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { themeClasses } from '@/styles/theme';

function MyComponent() {
  const { themeStyles, effectiveTheme } = useThemeStyles();
  
  return (
    <section className={themeStyles.sectionBg}>
      <h1 className={themeStyles.headingText}>
        My Title
      </h1>
      <p className={themeStyles.descriptionText}>
        Description text
      </p>
    </section>
  );
}
```

### Using Animations

```jsx
import { fadeInUp, staggerContainer } from '@/styles/animations';
import { motion } from 'framer-motion';

function MyComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={fadeInUp}>
        Content
      </motion.div>
    </motion.div>
  );
}
```

### Using Tech Stack Data

```jsx
import { techStacks } from '@/constants/techStack';

function TechComponent() {
  return (
    <div>
      {techStacks.map(tech => (
        <div key={tech.name}>{tech.name}</div>
      ))}
    </div>
  );
}
```

### Complete Example (Hero-like Component)

```jsx
'use client';
import { motion } from 'framer-motion';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { fadeInUp, gradientAnimation } from '@/styles/animations';
import { techStacks } from '@/constants/techStack';

export default function MySection() {
  const { themeStyles, effectiveTheme } = useThemeStyles();
  
  return (
    <section className={themeStyles.sectionBg}>
      <motion.h2
        className={themeStyles.headingText}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
      >
        <motion.span
          style={{
            backgroundImage: themeStyles.subtitleGradient,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
          animate={gradientAnimation}
        >
          Title
        </motion.span>
      </motion.h2>
    </section>
  );
}
```

## Available Theme Styles

- `sectionBg` - Section background color
- `headingText` - Heading text color
- `descriptionText` - Description/muted text color
- `buttonBorder`, `buttonText`, `buttonHoverBg` - Button styles
- `techBadgeBg(color)`, `techBadgeBorder`, `techBadgeShadow(glow)` - Tech badge styles
- `abhishekGradient`, `singhGradient`, `subtitleGradient` - Text gradients
- `radialGradient`, `leftGradient`, `bottomGradient`, `centerRadial` - Background gradients

## Available Animations

- `container`, `item` - Stagger container animations
- `fadeInUp`, `fadeInDown`, `fadeIn` - Fade animations
- `scaleIn` - Scale animations
- `staggerContainer` - Stagger children animation
- `gradientAnimation` - Text gradient animation
- `letterLoopAnimation`, `singhAnimation` - Letter animations
- `techStackContainer`, `techStackItem` - Tech stack animations

