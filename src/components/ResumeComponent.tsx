import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

/* =====================
   TYPES
===================== */
export type ResumeItem = {
  id: string | number;
  title: string;
  location?: string;
  description: string;
  date: string;
  image?: string; // optional logo / image
};

export type ResumeSection = {
  id: string;
  heading: string; // e.g. "Education", "Experience"
  items: ResumeItem[];
};

/* =====================
   COMPONENT
===================== */
export default function ResumeComponent({
  sections,
}: {
  sections: ResumeSection[];
}) {
  return (
    <Card className="w-full max-w-4xl mx-auto rounded-3xl shadow-md bg-white">
      <CardContent className="p-4 sm:p-6 md:p-8">

    <div className="w-full mt-4 sm:mt-5 space-y-8">
      {sections.map((section, sectionIdx) => (
        <div key={section.id} className="space-y-4">
          {/* Section Header */}
          <h1 className="text-3xl font-medium font-poppins">
            {section.heading}
          </h1>

          {section.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: (sectionIdx + idx) * 0.05 }}
            >
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[48px_1fr] gap-4">
                    {/* Image / Logo */}
                    <div className="w-12 h-12">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain rounded-md"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-1">
                        <div>
                          <p className="font-medium leading-tight">
                            {item.title}
                          </p>
                          {item.location && (
                            <p className="text-sm text-muted-foreground">
                              {item.location}
                            </p>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                          {item.date}
                        </p>
                      </div>

                      <p className="text-sm text-foreground/90 mt-2 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ))}
          </div>
      </CardContent>
    </Card>
  );
}

/* =====================
   USAGE EXAMPLE
===================== */

/*
const resumeSections: ResumeSection[] = [
  {
    id: "education",
    heading: "Education",
    items: [
      {
        id: 1,
        title: "Student – Worcester Polytechnic Institute",
        location: "Worcester, Massachusetts",
        description: "Bachelor and Master of Science in Computer Science.",
        date:
          "Aug 2022 – May 2026 (BS), Aug 2024 – May 2027 (MS)",
        image: "/logos/wpi.png",
      },
    ],
  },
  {
    id: "experience",
    heading: "Experience",
    items: [
      {
        id: 2,
        title: "Software Engineering Intern – Waters Corporation",
        location: "Milford, Massachusetts",
        description:
          "Developed a Retrieval Augmented Generation (RAG) AI chatbot to enhance customer support.",
        date: "June 2025 – August 2025",
        image: "/logos/waters.png",
      },
    ],
  },
];

<ResumeComponent sections={resumeSections} />
*/
