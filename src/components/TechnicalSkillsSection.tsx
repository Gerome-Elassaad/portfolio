"use client";

import { 
  SiTypescript, SiJavascript, SiPython, SiNextdotjs, SiReact, 
  SiAngular, SiNuxtdotjs, SiVuedotjs, SiFlutter, SiTailwindcss,
  SiExpress, SiNestjs, SiFirebase, SiDotnet, SiLaravel, 
  SiFastapi, SiSupabase, SiMysql, SiPostgresql, SiOracle,
  SiOpenai, SiGoogle, SiWordpress, SiShopify, SiVercel
} from 'react-icons/si';
import { 
  Code2, Database, Zap, Brain, Globe, ShoppingCart 
} from 'lucide-react';

const config = {
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        icons: [
          { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
          { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
          { icon: Code2, label: "HTML", color: "#E34F26" },
          { icon: Code2, label: "CSS", color: "#1572B6" },
          { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
          { icon: SiPython, label: "Python", color: "#3776AB" },
          { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
          { icon: SiReact, label: "React", color: "#61DAFB" },
          { icon: SiAngular, label: "Angular", color: "#DD0031" },
          { icon: SiNuxtdotjs, label: "Nuxt.js", color: "#00DC82" },
          { icon: SiVuedotjs, label: "Vue.js", color: "#4FC08D" },
          { icon: SiFlutter, label: "Flutter", color: "#02569B" },
        ],
      },
      {
        title: "Backend",
        icons: [
          { icon: SiExpress, label: "Express.js", color: "#000000" },
          { icon: SiNestjs, label: "NestJS", color: "#E0234E" },
          { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
          { icon: SiDotnet, label: ".NET Core", color: "#512BD4" },
          { icon: SiLaravel, label: "Laravel", color: "#FF2D20" },
          { icon: SiFastapi, label: "FastAPI", color: "#009688" },
          { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
          { icon: SiMysql, label: "MySQL", color: "#4479A1" },
          { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
          { icon: SiOracle, label: "Oracle DB", color: "#F80000" },
        ],
      },
      {
        title: "Integrations",
        icons: [
          { icon: SiOpenai, label: "OpenAI", color: "#412991" },
          { icon: Brain, label: "Claude", color: "#CC785C" },
          { icon: Zap, label: "Grok", color: "#1DA1F2" },
          { icon: SiVercel, label: "AI/SDK (Vercel)", color: "#000000" },
          { icon: SiGoogle, label: "Google Gemini/GCP", color: "#4285F4" },
          { icon: Brain, label: "Anthropic", color: "#CC785C" },
          { icon: SiWordpress, label: "WordPress", color: "#21759B" },
          { icon: SiShopify, label: "Shopify", color: "#7AB55C" },
          { icon: ShoppingCart, label: "BigCommerce", color: "#121118" },
          { icon: Globe, label: "Many More", color: "#6B7280" },
        ],
      },
    ],
  },
};

// Component to render the skills section
const TechnicalSkillsSection = () => {
  const { technical } = config;

  if (!technical.display) return null;

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{technical.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {technical.skills.map((skillCategory, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">
                {skillCategory.title}
              </h3>
              
              <div className="grid grid-cols-4 gap-4">
                {skillCategory.icons.map((iconItem, iconIndex) => {
                  const IconComponent = iconItem.icon;
                  return (
                    <div
                      key={iconIndex}
                      className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                      title={iconItem.label}
                    >
                      <IconComponent 
                        size={32} 
                        style={{ color: iconItem.color }}
                        className="mb-2 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight">
                        {iconItem.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;