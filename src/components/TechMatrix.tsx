import { Cpu, Activity, Factory, Code2 } from "lucide-react";

const skills = [
  {
    category: "Hardware & Microcontrollers",
    icon: <Cpu className="text-primary mb-4" size={32} />,
    items: ["Arduino", "STM32", "ESP32", "Raspberry Pi", "PCB Design"],
  },
  {
    category: "Control & Simulation",
    icon: <Activity className="text-secondary mb-4" size={32} />,
    items: ["MATLAB", "Simulink", "LabVIEW", "PID Tuning", "Control Systems"],
  },
  {
    category: "Industrial Automation",
    icon: <Factory className="text-primary mb-4" size={32} />,
    items: ["PLC (Siemens, Allen-Bradley)", "SCADA", "HMI", "Transducers & Sensors", "VFD"],
  },
  {
    category: "Software & Languages",
    icon: <Code2 className="text-secondary mb-4" size={32} />,
    items: ["C", "C++", "Python", "Git", "React/Next.js (IoT Dashboards)"],
  },
];

export default function TechMatrix() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Technical <span className="text-primary text-glow">Skill Matrix</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors">
            {skill.icon}
            <h3 className="text-xl font-semibold mb-4 text-slate-100">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
