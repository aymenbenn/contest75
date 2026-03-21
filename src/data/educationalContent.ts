export interface ContentSection {
  heading: string;
  body: string;
  stat?: string;
  interactive?: boolean;
}

export interface EducationalArticle {
  id: string;
  category: string;
  title: string;
  preview: string;
  icon: string;
  color: string;
  content: {
    sections: ContentSection[];
  };
}

export const educationalContent: EducationalArticle[] = [
{
  id: 'understanding-loss',
  category: 'Understanding Hearing Loss',
  title: 'Why We Lose High Frequencies First',
  preview:
  "Learn why birdsong and children's voices are often the first sounds to fade as we age.",
  icon: 'ActivityIcon',
  color: 'bg-blue-100 text-blue-700',
  content: {
    sections: [
    {
      heading: 'The Anatomy of Hearing',
      body: 'Inside your inner ear (cochlea) are tiny hair cells responsible for translating sound waves into electrical signals for your brain. The cells that detect high-frequency sounds are located at the entrance of the cochlea, meaning they process every sound that enters.'
    },
    {
      heading: 'Wear and Tear',
      body: 'Because these high-frequency hair cells are exposed to all incoming sound, they experience the most wear and tear over a lifetime. This is why age-related hearing loss (presbycusis) typically affects high pitches first.',
      stat: '1 in 3 adults over 65 has some degree of hearing loss.',
      interactive: true
    }]

  }
},
{
  id: 'protecting-hearing',
  category: 'Protecting Your Hearing',
  title: 'Everyday Noises That Can Cause Damage',
  preview:
  'Discover which common household and outdoor sounds might be louder than you think.',
  icon: 'ShieldCheckIcon',
  color: 'bg-green-100 text-green-700',
  content: {
    sections: [
    {
      heading: 'The 85 Decibel Rule',
      body: 'Prolonged exposure to any sound over 85 decibels (dB) can cause gradual hearing loss. To put that in perspective, normal conversation is about 60 dB.'
    },
    {
      heading: 'Common Culprits',
      body: 'Lawnmowers (90-106 dB), blenders (88 dB), and even heavy city traffic (85 dB) can exceed safe limits if you are exposed for long periods without protection.'
    }]

  }
},
{
  id: 'living-well',
  category: 'Living Well',
  title: 'Tips for Better Conversations in Noisy Places',
  preview:
  'Simple strategies to help you hear better at restaurants and family gatherings.',
  icon: 'UsersIcon',
  color: 'bg-amber-100 text-amber-700',
  content: {
    sections: [
    {
      heading: 'Positioning is Key',
      body: 'When at a restaurant, try to sit with your back to the main room or the kitchen. This reduces the amount of background noise entering your ears directly.'
    },
    {
      heading: 'Lighting Matters',
      body: 'We all use visual cues to help us understand speech. Ensure the face of the person you are speaking with is well-lit so you can see their expressions and lip movements.'
    }]

  }
},
{
  id: 'our-solutions',
  category: 'Our Solutions',
  title: 'Modern Hearing Aids: Not What You Remember',
  preview:
  "Today's devices are nearly invisible, connect to your phone, and use AI to filter noise.",
  icon: 'EarIcon',
  color: 'bg-teal-100 text-teal-700',
  content: {
    sections: [
    {
      heading: 'Invisible Technology',
      body: 'Modern hearing aids are incredibly small. Many models sit completely hidden inside the ear canal, while others hide discreetly behind the ear.'
    },
    {
      heading: 'Smart Connectivity',
      body: 'You can now stream phone calls, music, and TV directly to your hearing aids, just like wireless earbuds. They also automatically adjust to your environment using advanced algorithms.'
    }]

  }
}];