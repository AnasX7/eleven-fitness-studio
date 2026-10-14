import Hero from '../sections/Hero';
import ScheduleSection from '../sections/ScheduleSection';
import TrainersSection from '../sections/TrainersSection';
import MembershipSection from '../sections/MembershipSection';

export default function Main() {
  return (
    <main className="mx-auto w-full max-w-[1248px] border-x border-border">
      <Hero />
      <ScheduleSection />
      <TrainersSection />
      <MembershipSection />
    </main>
  );
}
