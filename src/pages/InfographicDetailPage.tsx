import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { educationalContent } from '../data/educationalContent';
import * as Icons from 'lucide-react';
interface InfographicDetailPageProps {
  articleId: string;
  onBack: () => void;
  isStoreMode: boolean;
}
export function InfographicDetailPage({
  articleId,
  onBack,
  isStoreMode
}: InfographicDetailPageProps) {
  const article = educationalContent.find((a) => a.id === articleId);
  if (!article) {
    return (
      <div className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <p>Article not found.</p>
        <button onClick={onBack} className="ml-4 text-primary underline">
          Go back
        </button>
      </div>);

  }
  const Icon = (Icons as any)[article.icon] || Icons.InfoIcon;
  return (
    <div className="min-h-screen bg-background pt-16 pb-24 flex flex-col">
      <Header
        title={article.category}
        onBack={onBack}
        isStoreMode={isStoreMode} />
      

      <article className="max-w-2xl mx-auto w-full bg-surface min-h-screen md:min-h-0 md:mt-6 md:rounded-2xl md:border border-border md:shadow-sm overflow-hidden">
        <div className={`h-3 w-full ${article.color.split(' ')[0]}`} />

        <div className="p-6 md:p-10">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${article.color}`}>
            
            <Icon className="w-8 h-8" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="space-y-10">
            {article.content.sections.map((section, index) =>
            <motion.section
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5
              }}>
              
                <h2 className="text-2xl font-bold text-textPrimary mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-textSecondary leading-relaxed">
                  {section.body}
                </p>

                {section.stat &&
              <div className="mt-6 p-6 bg-accent/10 border-l-4 border-accent rounded-r-xl">
                    <p className="text-xl font-bold text-accent-dark">
                      {section.stat}
                    </p>
                  </div>
              }
              </motion.section>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex justify-center">
            <button className="flex items-center text-primary font-bold hover:text-primary-light touch-target px-6 py-2 rounded-full border border-primary/20 hover:bg-primary/5 transition-colors">
              <Icons.Share2Icon className="w-5 h-5 mr-2" />
              Share this article
            </button>
          </div>
        </div>
      </article>
    </div>);

}