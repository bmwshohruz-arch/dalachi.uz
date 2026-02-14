
import React from 'react';

export interface SlideProps {
  active: boolean;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  duration: string;
  active?: boolean;
}

export interface BusinessCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}