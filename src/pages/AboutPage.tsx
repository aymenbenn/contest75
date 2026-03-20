import React from 'react';
import { motion } from 'framer-motion';
import { DecorativeDivider } from '../components/DecorativeDivider';
export function AboutPage() {
  return (
    <div className="w-full py-16 px-4 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-brand-charcoal mb-4">
            Meet the Besties
          </h1>
          <p className="text-sm uppercase tracking-widest text-brand-teal font-bold">
            The voices behind the delusion
          </p>
        </div>

        {/* Symmetrical Host Bios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Host 1 */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="wes-anderson-border">
            
            <div className="wes-anderson-border-inner flex flex-col items-center text-center h-full">
              <div className="w-32 h-32 rounded-full bg-brand-blush border-2 border-hot-pink mb-6 flex items-center justify-center overflow-hidden">
                {/* Placeholder for Host 1 Image */}
                <span className="font-playfair text-3xl text-hot-pink">H1</span>
              </div>
              <h2 className="font-playfair text-2xl font-bold text-brand-charcoal mb-1">
                Host One
              </h2>
              <h3 className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-6">
                Mom • Entrepreneur • Truth-Teller
              </h3>
              <p className="font-sans text-brand-charcoal/80 leading-relaxed">
                Navigating the chaos of raising humans while building an empire.
                Known for her unapologetic honesty and inability to sugarcoat
                anything. She brings the fire, the business acumen, and the
                reality checks we all desperately need.
              </p>
            </div>
          </motion.div>

          {/* Host 2 */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="wes-anderson-border">
            
            <div className="wes-anderson-border-inner flex flex-col items-center text-center h-full">
              <div className="w-32 h-32 rounded-full bg-brand-blush border-2 border-brand-teal mb-6 flex items-center justify-center overflow-hidden">
                {/* Placeholder for Host 2 Image */}
                <span className="font-playfair text-3xl text-brand-teal">
                  H2
                </span>
              </div>
              <h2 className="font-playfair text-2xl font-bold text-brand-charcoal mb-1">
                Host Two
              </h2>
              <h3 className="text-xs uppercase tracking-widest text-brand-purple font-bold mb-6">
                Mom • Creative • No-Filter Friend
              </h3>
              <p className="font-sans text-brand-charcoal/80 leading-relaxed">
                The creative soul who finds beauty in the breakdown. She
                balances motherhood with artistic pursuits and isn't afraid to
                laugh at her own mistakes. She brings the warmth, the wild
                ideas, and the perfectly timed comedic relief.
              </p>
            </div>
          </motion.div>
        </div>

        <DecorativeDivider />

        {/* Our Story */}
        <div className="max-w-3xl mx-auto mt-20 mb-16 wes-anderson-border bg-brand-blush">
          <div className="wes-anderson-border-inner text-center bg-transparent">
            <h2 className="font-playfair text-3xl text-brand-charcoal mb-6">
              Our Story
            </h2>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed mb-6">
              It started with a 45-minute voice note about a school bake sale
              that somehow turned into an existential crisis about modern
              womanhood. We realized that the conversations we were having
              behind closed doors—the raw, unedited, slightly delusional
              ones—were exactly what other women needed to hear.
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              Proof of Life is our weekly check-in. It's proof that we survived
              another week of marriage, business, and raising kids, and a
              reminder that you aren't alone in the beautiful mess of it all.
            </p>
          </div>
        </div>

        {/* Quote Callout */}
        <div className="text-center py-12">
          <p className="font-playfair italic text-2xl md:text-3xl text-hot-pink max-w-2xl mx-auto leading-normal">
            "We're not giving advice. We're just telling each other exactly."
          </p>
        </div>
      </div>
    </div>);

}