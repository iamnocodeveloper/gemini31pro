import ChartCard from './ChartCard';
import ToggleCard from './ToggleCard';
import ProgressCard from './ProgressCard';

export default function BentoGrid() {
  return (
    <section id="producto" className="py-24 px-4 brutal-radial">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-5xl md:text-7xl mb-12 text-center text-dark">
          Ingeniería al <span className="text-primary not-italic font-sans font-bold uppercase tracking-tighter">extremo</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ChartCard />
          <ToggleCard />
          <ProgressCard />
        </div>
      </div>
    </section>
  );
}
