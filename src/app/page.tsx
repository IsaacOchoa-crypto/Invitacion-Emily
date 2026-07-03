import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Itinerary from "@/components/Itinerary";
import Gallery from "@/components/Gallery";
import Rsvp from "@/components/Rsvp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Hero />
      <Countdown />
      <Itinerary />
      <Gallery />
      <Rsvp />
      
      {/* Footer elegante */}
      <footer className="py-12 text-center bg-white border-t border-[#f5f1ed]">
        <p className="font-great-vibes text-3xl text-[#d4af37] mb-2">
          Familia Ochoa
        </p>
        <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-slate-400">
          Los esperamos con cariño
        </p>
      </footer>
    </main>
  );
}
