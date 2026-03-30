'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Campus', 'Sports', 'Events', 'Labs', 'Arts'];

const galleryItems = [
  { id: 1, src: 'https://picsum.photos/600/400?random=80', alt: 'School Campus', category: 'Campus', span: 'col-span-2' },
  { id: 2, src: 'https://picsum.photos/400/400?random=81', alt: 'Sports Day', category: 'Sports', span: '' },
  { id: 3, src: 'https://picsum.photos/400/400?random=82', alt: 'Science Lab', category: 'Labs', span: '' },
  { id: 4, src: 'https://picsum.photos/400/400?random=83', alt: 'Annual Day', category: 'Events', span: '' },
  { id: 5, src: 'https://picsum.photos/400/400?random=84', alt: 'Art Exhibition', category: 'Arts', span: '' },
  { id: 6, src: 'https://picsum.photos/600/400?random=85', alt: 'Football Match', category: 'Sports', span: 'col-span-2' },
  { id: 7, src: 'https://picsum.photos/400/400?random=86', alt: 'Library', category: 'Campus', span: '' },
  { id: 8, src: 'https://picsum.photos/400/400?random=87', alt: 'Robotics Lab', category: 'Labs', span: '' },
  { id: 9, src: 'https://picsum.photos/400/400?random=88', alt: 'Graduation', category: 'Events', span: '' },
  { id: 10, src: 'https://picsum.photos/400/400?random=89', alt: 'Music Class', category: 'Arts', span: '' },
  { id: 11, src: 'https://picsum.photos/400/400?random=90', alt: 'Swimming Pool', category: 'Sports', span: '' },
  { id: 12, src: 'https://picsum.photos/400/400?random=91', alt: 'Assembly Hall', category: 'Campus', span: '' },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Campus Life
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-4">
            Life at <span className="text-[#CC0000]">QMIS</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse into the vibrant, dynamic, and enriching life at Queen Mira International School.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#CC0000] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                item.span === 'col-span-2' ? 'col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0A0A3E]/0 group-hover:bg-[#0A0A3E]/50 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-bold text-sm">{item.alt}</span>
                <span className="text-white/70 text-xs block">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  unoptimized
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="text-center mt-4">
                <div className="text-white font-bold text-lg">{selectedImage.alt}</div>
                <div className="text-gray-400 text-sm">{selectedImage.category}</div>
              </div>
            </div>
          </div>
        )}

        {/* View all CTA */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-[#CC0000] text-[#CC0000] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#CC0000] hover:text-white transition-all duration-200"
          >
            View Full Gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
