import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  tags?: string[];
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  tags = [],
  github,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="block h-full w-full">
      <motion.div
        className="relative rounded-2xl overflow-hidden bg-[#1a3a3a] border border-white/10 h-full flex flex-col"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Image Section */}
        {/* We use aspect-video to match your laptop screen shape */}
        <div className="relative aspect-video overflow-hidden flex-shrink-0 bg-[#1a3a3a] flex items-center justify-center p-4">
          <motion.img
            src={image}
            alt={imageAlt || title}
            /* object-contain: This is the ONLY way to show the ENTIRE image.
               p-4: Adds a little "breathing room" so the screenshot doesn't hit the card edges.
            */
            className="w-full h-full object-contain"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Content Section */}
        <div className="p-5 pt-0 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-white leading-tight tracking-tight mb-2 min-h-[3rem] line-clamp-2">
            {title}
          </h3>
          
          <p className="text-sm text-white/60 leading-relaxed line-clamp-3 flex-grow mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between pt-1 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 ml-3 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-white/25 transition-all duration-200"
              >
                <Github className="w-4 h-4 text-white/70" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400"
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </div>
  );
}