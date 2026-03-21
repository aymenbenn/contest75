export interface ScoreThreshold {
  min: number;
  max: number;
  label: string;
  description: string;
  color: string;
  zone: 'green' | 'amber' | 'red';
}

export const scoringConfig = {
  thresholds: {
    green: {
      min: 80,
      max: 100,
      label: 'Hearing appears healthy',
      description:
      "Based on your answers, your hearing seems to be in good shape. It's always a good idea to protect your ears in noisy environments and check back annually.",
      color: 'var(--color-success)',
      zone: 'green'
    } as ScoreThreshold,
    amber: {
      min: 50,
      max: 79,
      label: 'Some signs to watch',
      description:
      "You've indicated some mild difficulties in certain situations. This is very common. We recommend a professional check to establish a baseline.",
      color: 'var(--color-warning)',
      zone: 'amber'
    } as ScoreThreshold,
    red: {
      min: 0,
      max: 49,
      label: 'We recommend a professional check',
      description:
      'Your responses suggest you might be missing out on important sounds. A comprehensive hearing evaluation can help identify the cause and find solutions.',
      color: 'var(--color-danger)',
      zone: 'red'
    } as ScoreThreshold
  },
  categories: [
  { id: 'speech', label: 'Speech Clarity', questionIds: ['q3', 'q4'] },
  { id: 'environment', label: 'Noisy Environments', questionIds: ['q5'] },
  { id: 'awareness', label: 'Environmental Awareness', questionIds: ['q6'] }]

};