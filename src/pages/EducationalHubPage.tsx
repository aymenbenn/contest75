import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';
import { educationalContent } from '../data/educationalContent';
interface EducationalHubPageProps {
  onArticleSelect: (id: string) => void;
  isStoreMode: boolean;
}
export function EducationalHubPage({
  onArticleSelect,
  isStoreMode
}: EducationalHubPageProps) {
  return (
    <div className="min-h-screen bg-background pt-16 pb-24 px-4 flex flex-col">
      <Header title="Hearing Health Hub" isStoreMode={isStoreMode} />

      <div className="max-w-4xl mx-auto w-full py-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-textPrimary mb-2">
            Knowledge is power
          </h2>
          <p className="text-lg text-textSecondary">
            Explore simple guides and tips to understand and protect your
            hearing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationalContent.map((article, index) =>
          <InfoCard
            key={article.id}
            title={article.title}
            preview={article.preview}
            iconName={article.icon}
            colorClass={article.color}
            onClick={() => onArticleSelect(article.id)}
            index={index} />

          )}
        </div>
      </div>
    </div>);

}