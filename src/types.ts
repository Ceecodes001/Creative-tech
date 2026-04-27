/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Model {
  id: string;
  name: string;
  category: 'Editorial' | 'Runway' | 'Commercial' | 'Avant-Garde';
  height: string;
  bust: string;
  waist: string;
  hips: string;
  eyes: string;
  hair: string;
  imageUrl: string;
  bio: string;
}

export interface BookingInquiry {
  modelId: string;
  clientName: string;
  clientEmail: string;
  date: string;
  message: string;
}
