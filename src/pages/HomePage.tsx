import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DecorativeDivider } from '../components/DecorativeDivider';
import { StreamingLinks } from '../components/StreamingLinks';
import { EpisodeCard } from '../components/EpisodeCard';
export function HomePage() {
  return (
    <div className="w-full">
      {/* NEW HERO SECTION */}
      <section className="relative w-full border-b-4 border-soft-pink bg-brand-cream overflow-hidden">
        <motion.img
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          src="/gpt-image-1.5-high-fidelity_a_make_a_hero_image_fo.png"
          alt="Proof of Life - Two Delusional Besties Telling Each Other Exactly"
          className="w-full h-auto object-cover block" />
        

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut'
          }}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 z-10">
          
          <Link
            to="/episodes"
            className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-hot-pink text-white font-sans uppercase tracking-widest font-bold text-xs sm:text-sm rounded-full shadow-lg hover:bg-brand-charcoal hover:scale-105 transition-all duration-300">
            
            Listen Now
          </Link>
        </motion.div>
      </section>

      <DecorativeDivider />

      {/* What We're About Section */}
      <section className="py-12 px-4 bg-brand-blush">
        <div className="max-w-3xl mx-auto wes-anderson-border">
          <div className="wes-anderson-border-inner text-center">
            <h2 className="text-xs uppercase tracking-widest font-bold text-brand-teal mb-6">
              What We're About
            </h2>
            <p className="font-playfair text-xl md:text-2xl text-brand-charcoal leading-relaxed">
              An authentic take on motherhood, life, entrepreneurship, and
              marriage. We skip the small talk and dive straight into the messy,
              beautiful reality of being 43-year-old women trying to hold it all
              together—while looking fabulous doing it.
            </p>
          </div>
        </div>
      </section>

      <DecorativeDivider />

      {/* Latest Episode Spotlight */}
      <section className="py-12 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-xs uppercase tracking-widest font-bold text-brand-orange mb-4">
            Latest Episode
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl text-brand-charcoal">
            Fresh Out the Oven
          </h3>
        </div>

        <EpisodeCard
          number="05"
          title="The Myth of 'Having It All' (And Why We Stopped Trying)"
          date="Oct 24, 2025"
          duration="45 MIN"
          description="This week, we break down the absolute lie that is work-life balance. From hiding in the pantry to eat snacks away from our kids, to sending emails at 2 AM. It's not pretty, but it's real." />
        
      </section>

      <DecorativeDivider />

      {/* Streaming Platforms */}
      <section className="py-16 px-4 bg-brand-cream text-center">
        <h2 className="font-playfair italic text-2xl text-brand-charcoal mb-2">
          Available wherever you get your audio
        </h2>
        <StreamingLinks />
      </section>
    </div>);

}