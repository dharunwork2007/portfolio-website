export default function Academics() {
  return (
    <section id="academics" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100">
        Academics & <span className="text-primary text-glow">Achievements</span>
      </h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        
        {/* Item 1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="font-bold text-sm">2024</span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-700 bg-slate-800 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-200">ISA Student Chapter President</div>
            </div>
            <div className="text-slate-400">Led the International Society of Automation (ISA) student chapter at PSG iTech. Organized 5+ industrial visits and hands-on PLC workshops.</div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="font-bold text-sm">2023</span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-700 bg-slate-800 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-200">B.E. Instrumentation & Control</div>
            </div>
            <div className="text-slate-400">PSG Institute of Technology and Applied Research. Core coursework: Control Systems, Industrial Instrumentation, Process Control, Microprocessors.</div>
          </div>
        </div>

      </div>
    </section>
  );
}
