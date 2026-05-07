/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div id="main-container" className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans flex flex-col items-center justify-start relative overflow-x-hidden selection:bg-[#333] selection:text-white">
      
      {/* Banner de Lady Bug */}
      <motion.div 
        id="hero-banner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-[42vh] relative overflow-hidden flex items-center justify-center border-b border-[#222]"
      >
        <img 
          src="https://images.unsplash.com/photo-1501472304863-12621740348a?auto=format&fit=crop&q=80&w=2048" 
          alt="Ladybug High Contrast" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-10 z-20">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#666] mb-2 font-bold">Natural Design</p>
          <h2 className="text-3xl md:text-4xl font-serif italic text-white/90">The Ladybug Reflection</h2>
        </div>
      </motion.div>

      {/* Patrón de fondo sutil */}
      <div id="bg-texture" className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #888 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Riel superior de marca */}
      <div id="brand-rail" className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-baseline z-10">
        <div className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-semibold text-[#666]">
          Project Index
        </div>
        <div className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-semibold text-[#666]">
          001 — Hello World
        </div>
      </div>

      {/* Contenido principal */}
      <motion.main 
        id="content-centerpiece"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center z-10 px-4"
      >
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#444] to-transparent"
        />
        
        <h1 id="title" className="text-7xl md:text-[120px] font-light tracking-tighter leading-none mb-6 italic font-serif">
          ¡Hola Mundo!
        </h1>

        <div id="subtitle-wrapper" className="flex items-center gap-6">
          <span className="w-6 md:w-12 h-[1px] bg-[#333]"></span>
          <p id="subtitle" className="text-[12px] md:text-[14px] text-[#888] font-light tracking-[0.2em] uppercase">
            Simplicidad en cada línea de código
          </p>
          <span className="w-6 md:w-12 h-[1px] bg-[#333]"></span>
        </div>
      </motion.main>

      {/* Bloque decorativo de código */}
      <motion.div 
        id="code-decoration"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-24 flex flex-col items-center z-10 hidden md:flex"
      >
        <div className="p-6 border border-[#222] rounded-lg bg-[#0a0a0a] shadow-2xl backdrop-blur-sm">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#333]"></div>
            <div className="w-2 h-2 rounded-full bg-[#333]"></div>
            <div className="w-2 h-2 rounded-full bg-[#333]"></div>
          </div>
          <code className="text-[13px] font-mono text-[#555] block leading-relaxed">
            <span className="text-[#444]">&lt;!DOCTYPE html&gt;</span><br/>
            <span className="text-[#555]">&lt;html&gt;</span><br/>
            <span className="text-[#aaa] ml-4">Hello World</span><br/>
            <span className="text-[#555]">&lt;/html&gt;</span>
          </code>
        </div>
        <p className="mt-6 text-[10px] uppercase tracking-widest text-[#444] font-medium">
          Built with Minimalist Principles
        </p>
      </motion.div>

      {/* Acento en la esquina */}
      <div id="corner-accent" className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right opacity-30 select-none">
        <p className="text-[9px] uppercase tracking-[0.2em] leading-relaxed text-[#888]">
          Design System v4.0<br/>
          Typeface: Georgia Italic / Sans
        </p>
      </div>

      {/* Firma del Web Master */}
      <footer id="webmaster-signature" className="absolute bottom-6 left-0 w-full text-center z-10">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#555] font-medium">
          Yoali Hernandez Martinez — Web Master
        </p>
      </footer>
    </div>
  );
}
