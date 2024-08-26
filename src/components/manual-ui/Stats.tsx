"use client";
import CountUp from "react-countup";

// Define the type for each stat item
interface Stat {
  id: number;
  num: number;
  text: string;
}

// Create the array of stat items with the defined type
const statValues: Stat[] = [
  {
    id: 0,
    num: 1,
    text: "Years of Experience",
  },
  {
    id: 1,
    num: 18,
    text: "Projects Worked On",
  },
  {
    id: 2,
    num: 25,
    text: "Techs/Skills mastered",
  },
  {
    id: 3,
    num: 27,
    text: "Code Commits on GitHub",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto lg:max-w-none">
          {statValues.map((stat) => (
            <div
              key={stat.id}
              className="flex-1 flex items-center lg:items-start justify-center lg:justify-start gap-4 lg:gap-4 lg:mt-10"
            >
              {/* CountUp with aria-label for accessibility */}
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl lg:text-6xl font-extrabold"
                aria-label={`${stat.num} ${stat.text}`}
              />
              <p
                className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 tracking-normal text-center lg:text-left mr-1`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
