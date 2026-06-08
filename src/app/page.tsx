import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProdutosSection from "@/components/ProdutosSection";
import IntegracoesSection from "@/components/IntegracoesSection";
import DocumentacaoSection from "@/components/DocumentacaoSection";
import SuiteSection from "@/components/SuiteSection";
import OrcamentoSection from "@/components/OrcamentoSection";
import StacksSection from "@/components/StacksSection";
import SuporteSection from "@/components/SuporteSection";
import FAQSection from "@/components/FAQSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E2E8F0]">
      <Header />
      <main className="flex flex-col gap-[1px]">
        <HeroSection />
        <ProdutosSection />
        <IntegracoesSection />
        <DocumentacaoSection />
        <SuiteSection />
        <OrcamentoSection />
        <StacksSection />
        <SuporteSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </div>
  );
}
