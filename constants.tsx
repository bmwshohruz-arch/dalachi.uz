
import React from 'react';
import { 
  TrendingDown, 
  Users, 
  AlertCircle, 
  ShieldCheck, 
  Search, 
  Zap, 
  CalendarCheck
} from 'lucide-react';

export const COLORS = {
  primary: '#2E7D32',
  secondary: '#F57C00',
  accent: '#1976D2',
  bg: '#F5F5F5',
  text: '#212121',
  white: '#FFFFFF'
};

// --- LOGO VA BREND MA'LUMOTLARI ---
export const BRAND = {
  name: "Dallachi Market",
  shortName: "D",
  logoUrl: null, // Agarda logotip rasmi bo'lsa, URL manzilini shu yerga qo'ying (masalan: "/logo.png")
  primaryColor: "#2E7D32",
  secondaryColor: "#F57C00"
};

// --- BARCHA RASMLAR TO'PLAMI ---
// Rasmlarni o'zgartirish uchun faqat shu yerga yangi URL manzilini yozing
export const MEDIA = {
  slide1Bg: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80",
  infraFront: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
  infraSolar: "https://images.unsplash.com/photo-1508514177221-18d1427d5a4f?auto=format&fit=crop&w=1920&q=80",
  infraLogistics: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80",
  infraRailway: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1920&q=80",
  infraScale: "https://images.unsplash.com/photo-1590684153482-d3307637d26a?auto=format&fit=crop&w=1920&q=80",
  infraBrand: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
};

export const SLIDES_COUNT = 16;

export const THE_PROBLEM = {
  farmers: [
    { text: "40% hosil isrof boʻladi", icon: <TrendingDown className="text-red-500" /> },
    { text: "Oʻrtachi 3-4 ta aralashuvchi", icon: <Users className="text-red-500" /> },
    { text: "Past narxlar va noaniqlik", icon: <AlertCircle className="text-red-500" /> }
  ],
  customers: [
    { text: "Narxlar kundan-kunga oʻzgaradi", icon: <TrendingDown className="text-red-500" /> },
    { text: "Sifat kafolati yoʻq", icon: <ShieldCheck className="text-red-500" /> },
    { text: "Sogʻlom mahsulot topish qiyin", icon: <Search className="text-red-500" /> }
  ]
};

export const ADVANTAGES = [
  {
    title: "Oldindan Buyurtma Tizimi",
    desc: "Dehqonlar uchun isrofsiz va kafolatlangan savdo.",
    longDesc: "Dehqonlar hosilini yig'ishdan oldin sotish imkoniyatiga ega bo'ladilar. Bu kutilmagan isrofni nolga tushiradi va mavsumiy daromadni 100% kafolatlaydi.",
    icon: <CalendarCheck size={32} />
  },
  {
    title: "Yaqin Mahsulot Tavsiyasi",
    desc: "Sunʼiy talab toʻplami orqali ommaviy buyurtmalar.",
    longDesc: "Tizim bir hududdagi o'xshash buyurtmalarni avtomatik guruhlaydi. Bu logistika xarajatlarini 40% gacha kamaytiradi va mahsulot narxini xaridor uchun arzonlashtiradi.",
    icon: <Search size={32} />
  },
  {
    title: "Toʻgʻridan-toʻgʻri Aloqa",
    desc: "Oʻrtachilarsiz, har ikki tomon uchun maqbul narxlar.",
    longDesc: "O'rtachilarning yo'qligi sababli dehqon ko'proq foyda ko'radi, xaridor esa bozordagidan 20-30% arzonroq va eng yangi agro mahsulotlarni qabul qilib oladi.",
    icon: <Zap size={32} />
  },
  {
    title: "Shaffoflik va Ishonch",
    desc: "Sifat nazorati va narxlarning aniq shakllanishi.",
    longDesc: "Har bir mahsulot sifat nazoratidan o'tadi. Xaridor mahsulotning qayerda, kim tomonidan va qanday sharoitda yetishtirilganini aniq bilib turadi.",
    icon: <ShieldCheck size={32} />
  }
];
