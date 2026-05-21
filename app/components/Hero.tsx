import { motion } from "framer-motion";
import {HeroScene} from "./HeroScene";

const stack = ["TYPESCRIPT", "NEXT", "REACT", "PYTHON", "NODE", "POSTGRES", "THREE"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 z-0 grid-bg">
        <div className="absolute inset-0 opacity-70">
          <HeroScene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="show"
          className="font-mono text-signal text-xs mb-6 flex flex-wrap gap-x-4 gap-y-1"
          variants={fadeUp}
          custom={0}
        >
          <span>[ STATUS: ACTIVE ]</span>
          <span>[ ROLE: SOFTWARE_ENGINEER ]</span>
          <span className="ml-auto text-muted-foreground">LOC: 37.7749° N, 122.4194° W</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={1}
          className="font-mono text-6xl sm:text-8xl lg:text-[10rem] font-extrabold leading-[0.85] tracking-tighter uppercase mb-12"
        >
          Yashika
          <br />
          <span className="text-stroke select-none">KHANDELWAL</span>
        </motion.h1>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="md:col-span-5 border-l-2 border-signal pl-6"
          >
            <p className="text-lg sm:text-lg font-light text-pretty leading-relaxed text-foreground/80">
              Software Engineer with a soft spot for shaders, late-night refactors, and apps that feel a
            little bit alive. Currently freelancing — and looking for projects with{" "}
            <span className="text-foreground italic">interesting</span> problems hiding inside.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="md:col-span-7 flex flex-wrap gap-2"
          >
            {stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 border border-border font-mono text-[10px] tracking-widest bg-canvas/50 hover:bg-signal hover:text-background hover:border-signal transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
