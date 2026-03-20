import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { EpisodeCard } from '../components/EpisodeCard';
import { DecorativeDivider } from '../components/DecorativeDivider';
/* ============================================================================
   HAND-OFF GUIDE FOR SITE OWNER
   ============================================================================
   
   HOW TO ADD A NEW EPISODE:
   1. Scroll down to the `episodesData` array below.
   2. Copy one of the existing episode blocks (from { to },).
   3. Paste it at the top of the list so it appears first.
   4. Update the fields: id, number, title, date, duration, description, link.
   
   HOW TO CHANGE COLORS:
   1. Open `index.css`.
   2. Look for the `:root` section at the top.
   3. Change the hex codes (e.g., #E84B8A) to your new colors.
   
   HOW TO SWAP HOST PHOTOS (About Page):
   1. Open `pages/AboutPage.tsx`.
   2. Find the comment `{/* Placeholder for Host 1 Image *\/}`.
   3. Replace the `<span>` tag with an `<img>` tag:
      <img src="URL_TO_YOUR_IMAGE" alt="Host Name" className="w-full h-full object-cover" />
      
   HOW TO UPDATE STREAMING LINKS:
   1. Open `components/StreamingLinks.tsx`.
   2. Find the `platforms` array.
   3. Change the `href: '#'` to your actual podcast URLs (e.g., `href: 'https://apple.com/...'`).
   ============================================================================ */
const episodesData = [
{
  id: 5,
  number: '05',
  title: "The Myth of 'Having It All' (And Why We Stopped Trying)",
  date: 'Oct 24, 2025',
  duration: '45 MIN',
  description:
  "This week, we break down the absolute lie that is work-life balance. From hiding in the pantry to eat snacks away from our kids, to sending emails at 2 AM. It's not pretty, but it's real.",
  link: '#'
},
{
  id: 4,
  number: '04',
  title: 'Marriage: Roommates Who Occasionally Make Out',
  date: 'Oct 17, 2025',
  duration: '52 MIN',
  description:
  "Let's talk about long-term partnership. How do you keep the spark alive when you're both exhausted from running businesses and raising tiny humans? Spoiler: Sometimes you don't, and that's okay.",
  link: '#'
},
{
  id: 3,
  number: '03',
  title: 'Entrepreneurship is Just Putting Out Fires in a Nice Blazer',
  date: 'Oct 10, 2025',
  duration: '48 MIN',
  description:
  'Behind every aesthetic Instagram post is a woman who just cried in her car because a vendor bailed. We share our biggest business failures and why we keep doing this to ourselves.',
  link: '#'
},
{
  id: 2,
  number: '02',
  title: 'Mom Guilt: The Unwanted Houseguest',
  date: 'Oct 03, 2025',
  duration: '41 MIN',
  description:
  'Why do we feel bad about literally everything? We dissect the anatomy of mom guilt, from screen time limits to serving cereal for dinner three nights in a row.',
  link: '#'
},
{
  id: 1,
  number: '01',
  title: 'Welcome to Our Delusion (Pilot)',
  date: 'Sep 26, 2025',
  duration: '35 MIN',
  description:
  "The origin story. Who we are, why we're doing this, and what you can expect from two 43-year-old besties who decided the world needed to hear their voice notes.",
  link: '#'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};
export function EpisodesPage() {
  return (
    <div className="w-full py-16 px-4 bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-brand-charcoal mb-4">
            Episodes
          </h1>
          <p className="text-sm uppercase tracking-widest text-brand-orange font-bold">
            New episodes every Thursday
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12">
          
          {episodesData.map((episode) =>
          <motion.div key={episode.id} variants={itemVariants}>
              <EpisodeCard
              number={episode.number}
              title={episode.title}
              date={episode.date}
              duration={episode.duration}
              description={episode.description}
              listenLink={episode.link} />
            
            </motion.div>
          )}
        </motion.div>

        <DecorativeDivider />

        <div className="text-center pb-8">
          <p className="font-sans text-brand-charcoal/70 italic">
            You've reached the end. Go listen to something!
          </p>
        </div>
      </div>
    </div>);

}