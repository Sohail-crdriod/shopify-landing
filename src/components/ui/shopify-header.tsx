import React from "react";
import { cn } from "@/lib/utils";

interface ShopifyHeaderProps {
  logoHref?: string;
  trialHref?: string;
  className?: string;
}

export const ShopifyHeader = React.forwardRef<HTMLDivElement, ShopifyHeaderProps>(
  ({ logoHref = "/", trialHref = "#", className }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "h-[72px] px-4 lg:px-[250px] flex items-center z-20 relative bg-transparent w-full",
          className
        )}
      >
        {/* Logo Section */}
        <div className="relative flex shrink-0 items-center mr-8">
          <a
            href={logoHref}
            data-component-name="logo-home"
            className="inline-block shrink-0 relative z-20"
          >
            <img
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/b2e2f48c81f4ae49a1f1f3c128238f50.svg"
              alt="Shopify"
              className="h-9 lg:h-9"
              data-component-name="shopify-logo"
            />
          </a>
        </div>

        {/* Navigation Spacer (Desktop) */}
        <nav
          className="max-lg:hidden flex h-full grow"
          aria-label="Main"
          data-component-name="desktop-main-navigation"
        />

        {/* Action Section */}
        <div className="ml-auto">
          {/* Desktop CTA */}
          <ul className="lg:flex hidden items-center">
            <li className="leading-[0]">
              <a
                href={trialHref}
                className={cn(
                  "inline-block self-center overflow-hidden max-w-full whitespace-nowrap",
                  "px-5 py-2 rounded-full border-2 transition-all duration-150",
                  "bg-black text-white font-semibold text-[16px] leading-6",
                  "border-transparent hover:bg-[#333333] active:bg-[#444444]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                )}
                data-component-name="start-free-trial"
              >
                Start for free
              </a>
            </li>
          </ul>

          {/* Mobile CTA */}
          <ul className="flex items-center lg:hidden">
            <li>
              <a
                href={trialHref}
                className="mr-4 text-base underline text-black font-normal"
                data-component-name="start-free-trial"
                aria-label="Start for free"
              >
                Start for free
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
);

ShopifyHeader.displayName = "ShopifyHeader";

export default ShopifyHeader;
