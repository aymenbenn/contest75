import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomePage } from './pages/WelcomePage';
import { ProfilePage } from './pages/ProfilePage';
import { HearingTestPage } from './pages/HearingTestPage';
import { ResultsPage } from './pages/ResultsPage';
import { EmailCapturePage } from './pages/EmailCapturePage';
import { CTAPage } from './pages/CTAPage';
import { EducationalHubPage } from './pages/EducationalHubPage';
import { InfographicDetailPage } from './pages/InfographicDetailPage';
import { StoreModePage } from './pages/StoreModePage';
import { BottomNav } from './components/BottomNav';
type Screen =
'welcome' |
'profile' |
'test' |
'results' |
'email' |
'cta' |
'hub' |
'article' |
'store';
export function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [isStoreMode, setIsStoreMode] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'screen' | 'learn' | 'store'>(
    'screen'
  );
  // Handle Bottom Nav Tab Changes
  const handleTabChange = (tab: 'screen' | 'learn' | 'store') => {
    setActiveTab(tab);
    if (tab === 'screen') {
      setCurrentScreen('welcome');
    } else if (tab === 'learn') {
      setCurrentScreen('hub');
    } else if (tab === 'store') {
      // For MVP, just show CTA page as store locator placeholder
      setCurrentScreen('cta');
    }
  };
  const resetFlow = () => {
    setScore(null);
    setCurrentScreen('welcome');
    setActiveTab('screen');
  };
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomePage
            key="welcome"
            onStart={() => setCurrentScreen('profile')}
            onLearn={() => {
              setActiveTab('learn');
              setCurrentScreen('hub');
            }}
            onStoreModeToggle={() => setCurrentScreen('store')} />);


      case 'profile':
        return (
          <ProfilePage
            key="profile"
            onNext={(answers) => {
              console.log('Profile answers:', answers);
              setCurrentScreen('test');
            }}
            onBack={() => setCurrentScreen('welcome')}
            isStoreMode={isStoreMode} />);


      case 'test':
        return (
          <HearingTestPage
            key="test"
            onComplete={(finalScore, answers) => {
              console.log('Test answers:', answers);
              setScore(finalScore);
              setCurrentScreen('results');
            }}
            onReset={resetFlow}
            isStoreMode={isStoreMode} />);


      case 'results':
        return (
          <ResultsPage
            key="results"
            score={score || 0}
            onEmailResults={() => setCurrentScreen('email')}
            onBookAppointment={() => setCurrentScreen('cta')}
            onReset={resetFlow}
            isStoreMode={isStoreMode} />);


      case 'email':
        return (
          <EmailCapturePage
            key="email"
            onSubmit={(email, name) => {
              console.log('Email captured:', email, name);
              setCurrentScreen('cta');
            }}
            onSkip={() => setCurrentScreen('cta')}
            isStoreMode={isStoreMode} />);


      case 'cta':
        return (
          <CTAPage
            key="cta"
            onLearn={() => {
              setActiveTab('learn');
              setCurrentScreen('hub');
            }}
            onReset={resetFlow}
            isStoreMode={isStoreMode} />);


      case 'hub':
        return (
          <EducationalHubPage
            key="hub"
            onArticleSelect={(id) => {
              setActiveArticleId(id);
              setCurrentScreen('article');
            }}
            isStoreMode={isStoreMode} />);


      case 'article':
        return (
          <InfographicDetailPage
            key="article"
            articleId={activeArticleId!}
            onBack={() => setCurrentScreen('hub')}
            isStoreMode={isStoreMode} />);


      case 'store':
        return (
          <StoreModePage
            key="store"
            onStartAssisted={() => {
              setIsStoreMode(true);
              setCurrentScreen('profile');
            }}
            onExitStoreMode={() => {
              setIsStoreMode(false);
              setCurrentScreen('welcome');
            }} />);


      default:
        return (
          <WelcomePage
            key="default"
            onStart={() => setCurrentScreen('profile')}
            onLearn={() => setCurrentScreen('hub')}
            onStoreModeToggle={() => setCurrentScreen('store')} />);


    }
  };
  // Determine if BottomNav should be shown
  const showBottomNav =
  !isStoreMode && ['welcome', 'hub', 'cta'].includes(currentScreen);
  return (
    <div className="w-full min-h-screen bg-background text-textPrimary font-sans selection:bg-primary/20">
      <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>

      {showBottomNav &&
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      }
    </div>);

}