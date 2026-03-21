export type QuestionType = 'single' | 'multi' | 'audio' | 'self-assessment';

export interface AnswerOption {
  id: string;
  label: string;
  icon?: string;
  value?: number;
  score?: number;
}

export interface Question {
  id: string;
  question: string;
  type: QuestionType;
  options: AnswerOption[];
}

export const profileQuestions: Question[] = [
{
  id: 'p1',
  question: "What's your age range?",
  type: 'single',
  options: [
  { id: 'a1', label: 'Under 50' },
  { id: 'a2', label: '50-59' },
  { id: 'a3', label: '60-69' },
  { id: 'a4', label: '70-79' },
  { id: 'a5', label: '80+' }]

},
{
  id: 'p2',
  question: 'Have you noticed any hearing changes?',
  type: 'single',
  options: [
  { id: 'c1', label: 'Yes, recently' },
  { id: 'c2', label: 'Yes, for a while' },
  { id: 'c3', label: 'Not sure' },
  { id: 'c4', label: 'No' }]

},
{
  id: 'p3',
  question: 'Where do you find hearing most difficult?',
  type: 'multi',
  options: [
  { id: 'e1', label: 'Conversations', icon: 'UsersIcon' },
  { id: 'e2', label: 'TV / Phone', icon: 'SmartphoneIcon' },
  { id: 'e3', label: 'Restaurants', icon: 'UtensilsIcon' },
  { id: 'e4', label: 'Outdoors', icon: 'TreePineIcon' },
  { id: 'e5', label: 'Meetings', icon: 'BriefcaseIcon' },
  { id: 'e6', label: 'None of these', icon: 'CheckCircleIcon' }]

}];


export const testQuestions: Question[] = [
{
  id: 'q1',
  question: 'Could you hear that tone clearly?',
  type: 'audio',
  options: [
  { id: 't1_1', label: 'Yes, clearly', score: 16.6 },
  { id: 't1_2', label: 'Somewhat', score: 8.3 },
  { id: 't1_3', label: 'No, not at all', score: 0 }]

},
{
  id: 'q2',
  question: 'Could you hear the high-pitched tone?',
  type: 'audio',
  options: [
  { id: 't2_1', label: 'Yes, clearly', score: 16.6 },
  { id: 't2_2', label: 'Somewhat', score: 8.3 },
  { id: 't2_3', label: 'No, not at all', score: 0 }]

},
{
  id: 'q3',
  question: 'Do you often ask people to repeat themselves?',
  type: 'self-assessment',
  options: [
  { id: 't3_1', label: 'Never', score: 16.6 },
  { id: 't3_2', label: 'Sometimes', score: 11 },
  { id: 't3_3', label: 'Often', score: 5.5 },
  { id: 't3_4', label: 'Always', score: 0 }]

},
{
  id: 'q4',
  question: 'Do you turn up the TV louder than others prefer?',
  type: 'self-assessment',
  options: [
  { id: 't4_1', label: 'Never', score: 16.6 },
  { id: 't4_2', label: 'Sometimes', score: 11 },
  { id: 't4_3', label: 'Often', score: 5.5 },
  { id: 't4_4', label: 'Always', score: 0 }]

},
{
  id: 'q5',
  question: 'Do you have difficulty hearing in noisy places?',
  type: 'self-assessment',
  options: [
  { id: 't5_1', label: 'Never', score: 16.6 },
  { id: 't5_2', label: 'Sometimes', score: 11 },
  { id: 't5_3', label: 'Often', score: 5.5 },
  { id: 't5_4', label: 'Always', score: 0 }]

},
{
  id: 'q6',
  question: 'Do you sometimes miss doorbells or phone rings?',
  type: 'self-assessment',
  options: [
  { id: 't6_1', label: 'Never', score: 17 }, // slightly adjusted to make total 100
  { id: 't6_2', label: 'Sometimes', score: 11 },
  { id: 't6_3', label: 'Often', score: 5.5 },
  { id: 't6_4', label: 'Always', score: 0 }]

}];