
import React, { createContext, useContext, useState, useEffect } from 'react';
import { MEDIA as DEFAULT_MEDIA, BRAND as DEFAULT_BRAND } from '../constants';

interface MediaContextType {
  media: typeof DEFAULT_MEDIA;
  brand: typeof DEFAULT_BRAND;
  updateMedia: (key: keyof typeof DEFAULT_MEDIA, value: string) => void;
  updateBrand: (key: keyof typeof DEFAULT_BRAND, value: string | null) => void;
  resetAll: () => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [media, setMedia] = useState(DEFAULT_MEDIA);
  const [brand, setBrand] = useState(DEFAULT_BRAND);

  useEffect(() => {
    const savedMedia = localStorage.getItem('dallachi_media');
    const savedBrand = localStorage.getItem('dallachi_brand');
    if (savedMedia) setMedia(JSON.parse(savedMedia));
    if (savedBrand) setBrand(JSON.parse(savedBrand));
  }, []);

  const updateMedia = (key: keyof typeof DEFAULT_MEDIA, value: string) => {
    const newMedia = { ...media, [key]: value };
    setMedia(newMedia);
    localStorage.setItem('dallachi_media', JSON.stringify(newMedia));
  };

  const updateBrand = (key: keyof typeof DEFAULT_BRAND, value: string | null) => {
    const newBrand = { ...brand, [key]: value };
    setBrand(newBrand);
    localStorage.setItem('dallachi_brand', JSON.stringify(newBrand));
  };

  const resetAll = () => {
    setMedia(DEFAULT_MEDIA);
    setBrand(DEFAULT_BRAND);
    localStorage.removeItem('dallachi_media');
    localStorage.removeItem('dallachi_brand');
  };

  return (
    <MediaContext.Provider value={{ media, brand, updateMedia, updateBrand, resetAll }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) throw new Error('useMedia must be used within a MediaProvider');
  return context;
};
