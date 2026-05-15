"use client";

import React from "react";
import { motion } from "motion/react";
import { reviews } from "@/lib/data";
import { Quote, ArrowRight } from "lucide-react";

export const Reviews = () => {
  return (
    <section id="reviews" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-instrument leading-none text-slate-950"
            >
              The humans behind <br />
              <span className="italic">the modern support team.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-slate-500 max-w-sm">
              Thousands of support professionals rely on Shiro to deliver exceptional experiences every single day.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured Review */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 rounded-[3rem] bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row group"
          >
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-violet-100 mb-8 fill-violet-100" />
                <p className="text-2xl font-instrument italic text-slate-950 mb-8 leading-relaxed">
                  "{reviews[0].quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={reviews[0].avatar} className="w-12 h-12 rounded-full object-cover shadow-lg" alt="" />
                <div>
                  <div className="font-bold text-slate-950">{reviews[0].author}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{reviews[0].role}</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
               <img src={reviews[0].image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </div>
          </motion.div>

          {/* Secondary Reviews Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             {reviews.slice(1).map((review, idx) => (
               <motion.div
                 key={review.author}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.2 }}
                 viewport={{ once: true }}
                 className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500"
               >
                 <p className="text-lg font-instrument italic text-slate-700 mb-8">
                   "{review.quote}"
                 </p>
                 <div className="flex items-center gap-4">
                    <img src={review.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
                    <div>
                      <div className="text-sm font-bold text-slate-950">{review.author}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.role}</div>
                    </div>
                 </div>
               </motion.div>
             ))}
             
             {/* Join the Community Card */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex-1 p-8 rounded-[2.5rem] bg-violet-600 text-white flex flex-col justify-center items-center text-center group cursor-pointer"
             >
                <div className="text-sm font-bold uppercase tracking-widest mb-4 opacity-70">Ready to join?</div>
                <h3 className="text-2xl font-instrument mb-6">Scale your vision.</h3>
                <div className="w-12 h-12 rounded-full bg-white text-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <ArrowRight className="w-6 h-6" />
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
