import Hero from '../components/sections/Hero';
import ScheduleSection from '../components/sections/ScheduleSection';
import TrainersSection from '../components/sections/TrainersSection';
import MembershipSection from '../components/sections/MembershipSection';

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-312 border-x border-border">
      <Hero />
      <ScheduleSection />
      <TrainersSection />
      <MembershipSection />
    </main>
  );
}
