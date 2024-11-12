import BenefitHeadline from "./components/Benefit/Headline"
import BenefitsIntro from "./components/Benefit/Intro"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ/FAQ"
import HeaderBar from "./components/HeaderBar"
import MainTitle from "./components/MainTitle"
import TestimonialIntro from "./components/Testimonial/Intro"
import Footer from "./Footer"

function App() {
  return (
    <>
      <HeaderBar title="Corretora Imóvis" />
      <main className="">
        <MainTitle
          title="Casa Moderna" 
          paragraph="R$ 500.000,00" 
          cta_text="Comprar" 
          cta_action={() => console.log("Comprar")} 
          cta_label="+5000 pessoas como voce já compraram esse produto" 
        />
        <BenefitsIntro />
        <BenefitHeadline 
          name="Corretora Imóvis" 
          title="Casa Moderna" 
          paragraph="R$ 500.000,00" 
          cta_text="Comprar" 
          cta_action={() => console.log("Comprar")}
        />
        <BenefitHeadline 
          name="Corretora Imóvis" 
          title="Casa Moderna" 
          paragraph="R$ 500.000,00" 
          cta_text="Comprar" 
          cta_action={() => console.log("Comprar")}
          reverse
        />
        <TestimonialIntro />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
