import { Model } from './types';

export const MODELS: Model[] = [
  {
    id: 'm1',
    name: 'ELARA VOSS',
    category: 'Editorial',
    height: "5'11\"",
    bust: '32',
    waist: '24',
    hips: '34',
    eyes: 'Deep Emerald',
    hair: 'Onyx',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    bio: 'A visionary presence in high-fashion editorial, Elara brings a sculptured elegance to every frame.'
  },
  {
    id: 'm2',
    name: 'JULIAN KROSS',
    category: 'Runway',
    height: "6'2\"",
    bust: '38',
    waist: '30',
    hips: '38',
    eyes: 'Steel Blue',
    hair: 'Slate',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    bio: 'Julian defines the modern masculine silhouette, commanding the runway with a sharp, architectural presence.'
  },
  {
    id: 'm3',
    name: 'SASKIA NOIR',
    category: 'Avant-Garde',
    height: "5'10\"",
    bust: '31',
    waist: '23',
    hips: '33',
    eyes: 'Amber',
    hair: 'Platinum',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    bio: 'Specializing in experimental and conceptual fashion, Saskia is a canvas for the industry\'s most daring designers.'
  },
  {
    id: 'm4',
    name: 'ADRIAN SOL',
    category: 'Commercial',
    height: "6'1\"",
    bust: '40',
    waist: '32',
    hips: '40',
    eyes: 'Hazel',
    hair: 'Golden Brown',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    bio: 'The face of luxury lifestyle brands, Adrian embodies approachable sophistication and prestige.'
  }
];

export const AGENCY_INFO = {
  name: 'Creative Tech Community',
  phone: '+2347060760992',
  creationDate: '4/01/2026',
  tagline: 'The intersection of couture and technology.',
  description: 'An invitation-only community for the world\'s most elite talent and visionary brands.'
};
