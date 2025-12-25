import React from 'react';

export interface PlaylistItem {
  title: string;
  artist: string;
  note: string; // The "Chatpata" context
}

export interface MemeConfig {
  topText: string;
  bottomText: string;
  imageKeyword: string;
}

export interface SectionProps {
  title: string;
  id: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}