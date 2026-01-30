"use client";

import React from "react";
import { Mail, Instagram, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[1800px] mx-auto border-b border-white/10 pb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block">
            Client Services
          </span>
          <h1 className="font-serif text-6xl md:text-9xl tracking-tighter italic">
            Get in touch
          </h1>
        </motion.div>
      </section>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Side: Information */}
        <div className="lg:col-span-4 space-y-20">
          <div className="space-y-8">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white">
              Inquiries
            </h2>
            <p className="text-white/50 text-sm leading-loose max-w-sm">
              Our concierge team is available to assist with sizing, private
              commissions, and global logistics. We aim to respond to all
              editorial and order inquiries within 24 hours.
            </p>
          </div>

          <div className="space-y-12">
            <ContactMethod
              icon={<Mail strokeWidth={1} className="w-5 h-5" />}
              title="Digital Correspondence"
              detail="atelier@verve.com"
            />
            <ContactMethod
              icon={<Instagram strokeWidth={1} className="w-5 h-5" />}
              title="Social Direct"
              detail="@verve_atelier"
            />
            <ContactMethod
              icon={<MapPin strokeWidth={1} className="w-5 h-5" />}
              title="The Atelier"
              detail="Tbilisi, Georgia — By Appointment Only"
            />
          </div>

          {/* Minimalist Map placeholder */}
          <div className="aspect-square w-full bg-[#0a0a0a] border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
              {/* Replace with your actual Map component or iFrame */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000')] bg-cover bg-center" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[9px] uppercase tracking-[0.5em] bg-black/80 px-4 py-2 border border-white/10">
                View Location
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <InputGroup
                label="Full Name"
                type="text"
                placeholder="ALEXANDER VERVE"
              />
              <InputGroup
                label="Email Address"
                type="email"
                placeholder="CLIENT@EXAMPLE.COM"
              />
            </div>

            <InputGroup
              label="Nature of Inquiry"
              type="text"
              placeholder="PRIVATE APPOINTMENT / ORDER INQUIRY"
            />

            <div className="flex flex-col gap-6">
              <label className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="HOW MAY WE ASSIST YOU?"
                className="bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white transition-all duration-500 resize-none placeholder:text-white/10 uppercase tracking-widest"
              />
            </div>

            <button className="group relative w-full md:w-auto px-20 py-6 bg-white text-black text-[10px] font-bold uppercase tracking-[0.5em] overflow-hidden transition-all duration-500 hover:bg-black hover:text-white border border-white">
              <span className="relative z-10 flex items-center justify-center gap-4">
                Send Inquiry
                <ArrowRight className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-2" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

const ContactMethod = ({
  icon,
  title,
  detail,
}: {
  icon: any;
  title: string;
  detail: string;
}) => (
  <div className="flex items-center gap-6 group">
    <div className="text-white/40 group-hover:text-white transition-colors duration-500">
      {icon}
    </div>
    <div>
      <h4 className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold mb-1">
        {title}
      </h4>
      <p className="text-[11px] uppercase tracking-widest text-white/80">
        {detail}
      </p>
    </div>
  </div>
);

const InputGroup = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-6 w-full">
    <label className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white transition-all duration-500 placeholder:text-white/5 uppercase tracking-widest"
    />
  </div>
);

export default ContactPage;
