import { useEffect, useRef } from "react";
import Matter from "matter-js";

const NETWORKS = [
  { label: "MTN", bg: "#F9C701", color: "#231823" },
  { label: "AIRTEL", bg: "#FB2C36", color: "#ffffff" },
  { label: "MTN", bg: "#F9C701", color: "#231823" },
  { label: "9MOBILE", bg: "#231823", color: "#ffffff" },
  { label: "AIRTEL", bg: "#FB2C36", color: "#ffffff" },
  { label: "GLO", bg: "#0E9D42", color: "#ffffff" },
  { label: "GLO", bg: "#0E9D42", color: "#ffffff" },
  { label: "9MOBILE", bg: "#231823", color: "#ffffff" },
];

const FONT = "600 15px system-ui, sans-serif";
const PAD_X = 22;
const PILL_H = 42;

function measurePillWidth(label: string): number {
  const tmp = document.createElement("canvas");
  const ctx = tmp.getContext("2d")!;
  ctx.font = FONT;
  return ctx.measureText(label).width + PAD_X * 2;
}

export function InstantTopupsPhysics() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const rafRef = useRef<number>(0);
  const startedRef = useRef(false);

  function startSimulation() {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
    if (engineRef.current) Matter.Engine.clear(engineRef.current);
    cancelAnimationFrame(rafRef.current);

    const W = container.clientWidth;
    const H = container.clientHeight;
    canvas.width = W;
    canvas.height = H;

    const engine = Matter.Engine.create({ gravity: { x: 0, y: 1.6 } });
    engineRef.current = engine;
    const world = engine.world;

    const wallOpts = { isStatic: true, restitution: 0.3, friction: 0.5 };
    Matter.World.add(world, [
      Matter.Bodies.rectangle(W / 2, H + 25, W * 2, 50, wallOpts),
      Matter.Bodies.rectangle(-25, H / 2, 50, H * 2, wallOpts),
      Matter.Bodies.rectangle(W + 25, H / 2, 50, H * 2, wallOpts),
    ]);

    const pillWidths = NETWORKS.map((n) => measurePillWidth(n.label));

    const bodies = NETWORKS.map((net, i) => {
      const w = pillWidths[i];
      const col = i % 4;
      const row = Math.floor(i / 4);
      const x = W * 0.12 + col * (W * 0.22) + (Math.random() * 16 - 8);
      const y = -PILL_H - row * 90 - Math.random() * 30;

      const body = Matter.Bodies.rectangle(x, y, w, PILL_H, {
        restitution: 0.35,
        friction: 0.4,
        frictionAir: 0.018,
        angle: (Math.random() - 0.5) * 0.6,
      });

      (body as any)._net = net;
      (body as any)._dim = { w, h: PILL_H };
      return body;
    });

    Matter.World.add(world, bodies);

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    const ctx = canvas.getContext("2d")!;

    function loop() {
      ctx.clearRect(0, 0, W, H);

      for (const body of bodies) {
        const { x, y } = body.position;
        const angle = body.angle;
        const net = (body as any)._net as (typeof NETWORKS)[0];
        const { w, h } = (body as any)._dim as { w: number; h: number };

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.roundRect(-w / 2, -h / 2, w, h, h / 2);
        ctx.fillStyle = net.bg;
        ctx.fill();

        ctx.font = FONT;
        ctx.fillStyle = net.color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(net.label, 0, 0);

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          startSimulation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="bg-pitupu-purple-50 rounded-[32px] p-4 md:px-8 py-8 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-[28px] font-semibold text-violet-500 tracking-[-0.02em] leading-[1.2]">
          Instant Top-ups
        </h3>
        <p className="text-lg font-medium text-violet-300 leading-[1.45]">
          Recharge your MTN, Airtel, Glo, or 9Mobile data and airtime without
          ever leaving the chat.
        </p>
      </div>

      <div
        ref={containerRef}
        className="w-full bg-white rounded-[32px] relative overflow-hidden"
        style={{ minHeight: 280 }}
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-[#E9F7EF] border border-[#27AE60] px-5 py-2.5 rounded-full pointer-events-none">
          <div className="w-5 h-5 bg-[#0A5C2F] rounded-full flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M10 3.5L4.5 9L2 6.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[#0A5C2F] font-semibold text-[14px] text-nowrap">
            Top up successful
          </span>
        </div>

        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
