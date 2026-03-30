import { ShopifyHeader } from "@/components/ui/shopify-header";
import { ShopifyHero } from "@/components/ui/shopify-hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F0]">
      <ShopifyHeader trialHref="https://admin.shopify.com/signup" />
      <ShopifyHero />
    </div>
  );
}
