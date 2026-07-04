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
      <footer className="py-16 text-center bg-white border-t border-[#f5f1ed]">
        <p className="font-great-vibes text-5xl md:text-6xl text-[#d4af37] drop-shadow-md mb-4">
          Familia Ochoa
        </p>
        <p className="font-montserrat text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-slate-700">
          Los esperamos con cariño
        </p>
      </footer>
    </main>
  );
}
