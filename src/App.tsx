import React from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { TrustBar } from './components/TrustBar';
import { BuildYourTruck } from './components/BuildYourTruck';
import { CategoryCards } from './components/CategoryCards';
import { FeaturedBrands } from './components/FeaturedBrands';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#B91C1C] selection:text-white">
      <Header />
      <main>
        <HeroBanner />
        <TrustBar />
        <BuildYourTruck />
        <CategoryCards />
        <FeaturedBrands />
      </main>
    </div>);

}