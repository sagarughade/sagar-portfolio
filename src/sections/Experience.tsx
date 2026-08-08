import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work happened."
          description="Placeholder roles below — swap in your real companies, titles and dates in src/data/experience.ts."
        />

        <div className="mt-14">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
