
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, RefreshCw, Image as ImageIcon, Type, Link as LinkIcon, Upload } from 'lucide-react';
import { useMedia } from './MediaContext';

const SettingsOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { media, brand, updateMedia, updateBrand, resetAll } = useMedia();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, key: string, isBrand: boolean = false) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        if (isBrand) {
          updateBrand(key as any, base64String);
        } else {
          updateMedia(key as any, base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[60] p-3 bg-white/80 backdrop-blur-md rounded-full shadow-2xl hover:bg-white transition-all text-gray-600 hover:text-green-600 border border-gray-200"
        title="Sozlamalar"
      >
        <Settings size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[80] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">Media Sozlamalari</h3>
                    <p className="text-sm text-gray-500">Rasmlarni URL yoki fayl orqali o'zgartiring</p>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Brand Settings */}
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-orange-600">
                      <Type size={18} />
                      <h4 className="font-bold uppercase tracking-widest text-xs">Brend va Logo</h4>
                    </div>
                    <div className="space-y-4">
                      <InputGroup 
                        label="Loyiha nomi" 
                        value={brand.name} 
                        onChange={(v: string) => updateBrand('name', v)} 
                      />
                      <InputGroup 
                        label="Qisqa nom (Logo harfi)" 
                        value={brand.shortName} 
                        onChange={(v: string) => updateBrand('shortName', v)} 
                      />
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Logo rasm</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={brand.logoUrl || ''}
                            placeholder="Rasm URL manzili..."
                            onChange={(e) => updateBrand('logoUrl', e.target.value || null)}
                            className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none"
                          />
                          <FileUploadButton onFileSelect={(e) => handleFileUpload(e, 'logoUrl', true)} />
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Media Settings */}
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-green-600">
                      <ImageIcon size={18} />
                      <h4 className="font-bold uppercase tracking-widest text-xs">Slayd Rasmlari</h4>
                    </div>
                    <div className="space-y-6">
                      {Object.entries(media).map(([key, url]) => (
                        <div key={key} className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{key.replace('infra', 'Infratuzilma ')}</label>
                          <div className="flex gap-3">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200 shadow-sm">
                              <img src={url} className="w-full h-full object-cover" alt="Preview" />
                            </div>
                            <div className="flex-1 flex gap-2">
                              <div className="relative flex-1">
                                <input
                                  type="text"
                                  value={url}
                                  onChange={(e) => updateMedia(key as any, e.target.value)}
                                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-green-500 outline-none pr-8"
                                />
                                <LinkIcon size={12} className="absolute right-3 top-3 text-gray-300" />
                              </div>
                              <FileUploadButton onFileSelect={(e) => handleFileUpload(e, key)} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex gap-4">
                  <button
                    onClick={resetAll}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-2xl transition-all"
                  >
                    <RefreshCw size={18} />
                    Asliga qaytarish
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const FileUploadButton = ({ onFileSelect }: { onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileSelect}
        accept="image/*"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="p-2 bg-gray-100 hover:bg-green-100 text-gray-500 hover:text-green-600 rounded-xl transition-all border border-gray-200"
        title="Fayl yuklash"
      >
        <Upload size={18} />
      </button>
    </>
  );
};

const InputGroup = ({ label, value, onChange, placeholder }: any) => (
  <div className="space-y-1">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">{label}</label>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 outline-none transition-all"
    />
  </div>
);

export default SettingsOverlay;
