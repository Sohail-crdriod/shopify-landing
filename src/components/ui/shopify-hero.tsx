"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoItem {
  src: string;
  alt: string;
}

const LOGO_DATA: LogoItem[] = [
  {
    alt: "Death Wish Coffee",
    src: "https://cdn.shopify.com/b/shopify-brochure2-assets/4a6ab9bbbf33ac29cf1747e48492a14e.svg",
  },
  {
    alt: "Untuckit",
    src: "https://cdn.shopify.com/b/shopify-brochure2-assets/d7d665c21caba6bf4e58aea093f60a0c.svg",
  },
  {
    alt: "Gymshark",
    src: "https://cdn.shopify.com/b/shopify-brochure2-assets/ea0fba11cd0b0a8221a77893385d4b6c.svg",
  },
  {
    alt: "Allbirds",
    src: "https://cdn.shopify.com/b/shopify-brochure2-assets/bb1480775c17a84b2787e71d4b8b5c72.svg",
  },
  {
    alt: "Kylie Cosmetics",
    src: "https://cdn.shopify.com/b/shopify-brochure2-assets/2075ad1e1e60e6fa121f54a1bfe4185c.svg",
  },
  {
    alt: "Brooklinen",
    src: "https://cdn.shopify.com/b/shopify-brochure2-assets/f000a563db2c785b97ea90a1a2695c1e.svg",
  },
];

// Duplicate for seamless marquee loop
const MARQUEE_LOGOS = [...LOGO_DATA, ...LOGO_DATA, ...LOGO_DATA, ...LOGO_DATA];

export const ShopifyHero = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  const [email, setEmail] = useState("");

  return (
    <section
      ref={ref}
      className={cn(
        "relative z-0 grid grid-cols-1 gap-y-[64px] bg-[#F2F2F0] pt-[72px] pb-[128px] text-black font-sans overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 items-center">
        <div className="md:col-span-6 flex flex-col gap-y-6">
          <div className="flex flex-col">
            <h1 className="text-[40px] md:text-[56px] font-[330] leading-[1.1] tracking-[-0.56px] text-balance">
              Start an online store for free
            </h1>
            <p className="pt-4 text-[18px] md:text-[20px] leading-[1.4] text-black/60 max-w-[540px]">
              Shopify is the all-in-one platform to build, run, and grow your
              online boutique. Start free, then get 3 months for ₹20/month
            </p>
          </div>

          <div className="max-w-[512px] w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col md:flex-row gap-2"
            >
              <div className="relative flex-grow group">
                <div
                  className={cn(
                    "relative box-border flex justify-between items-center w-full h-[60px] bg-white rounded-full transition-all duration-300 ring-1 ring-inset ring-zinc-300",
                    "focus-within:ring-2 focus-within:ring-[#751be9] hover:ring-zinc-400"
                  )}
                >
                  <input
                    type="email"
                    id="hero-email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-full h-full bg-transparent px-6 pt-5 pb-1 text-[16px] focus:outline-none"
                  />
                  <label
                    htmlFor="hero-email"
                    className={cn(
                      "absolute left-6 pointer-events-none transition-all duration-300 ease-out origin-top-left",
                      "text-zinc-500 text-[16px]",
                      "peer-placeholder-shown:top-[18px] peer-placeholder-shown:scale-100",
                      "top-[8px] scale-75 -translate-y-1 peer-focus:top-[8px] peer-focus:scale-75 peer-focus:-translate-y-1",
                      email && "top-[8px] scale-75 -translate-y-1"
                    )}
                  >
                    Enter your email address
                  </label>

                  <button
                    type="submit"
                    className="hidden md:block mr-1 h-[52px] px-6 bg-black text-white font-[550] rounded-full hover:bg-zinc-800 transition-colors whitespace-nowrap"
                  >
                    Start free trial
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="md:hidden w-full h-[60px] bg-black text-white font-[550] rounded-full hover:bg-zinc-800 transition-colors"
              >
                Start free trial
              </button>
            </form>
            <p className="pt-4 text-[14px] font-[420] text-black/60">
              You agree to receive Shopify marketing emails.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:col-span-6 lg:col-start-8 lg:col-span-5">
          <div className="relative">
            <img
              alt="Shopify Store Interface"
              className="w-full h-auto object-contain mx-auto"
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/ae3bb5026b18f6e9246facb6adaba75e.png?originalWidth=1680&originalHeight=1260"
            />
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-12">
        <h2 className="text-[24px] md:text-[28px] font-[360] leading-[1.2] tracking-[-0.28px] mb-8">
          Powering millions of businesses worldwide
        </h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="flex w-max animate-marquee-ltr">
          {MARQUEE_LOGOS.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-8 md:px-12 h-[64px] md:h-[80px] lg:h-[90px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ShopifyHero.displayName = "ShopifyHero";

export default ShopifyHero;
