"use client";

import Head from "next/head";
import Image from "next/image";

export default function EmConstrucaoPage() {
  return (
    <>
      <Head>
        <title>Em Construção | BrClick - Descobrindo o Brasil</title>
        <meta
          name="description"
          content="Estamos trabalhando duro para trazer algo incrível para você. Esta página estará disponível em breve. Projeto desenvolvido no curso BrClick."
        />
      </Head>
      <div className="hexagon-bg min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* BrClick Logo */}
      <div className="mb-6">
        <Image
          src="/images/logo.svg"
          alt="BrClick Logo"
          width={140}
          height={70}
          className="mx-auto"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Construction Illustration */}
        <div className="relative w-64 h-64 mx-auto mb-10">
          {/* Base/Ground */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-2 bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full" />

          {/* Building blocks animating */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            {/* Block 1 - always visible */}
            <div
              className="w-32 h-10 bg-linear-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg shadow-lg animate-fade-in"
              style={{ animationDelay: "0s" }}
            />
            {/* Block 2 */}
            <div
              className="w-28 h-10 bg-linear-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg shadow-lg animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            />
            {/* Block 3 */}
            <div
              className="w-24 h-10 bg-linear-to-r from-[#EC4899] to-[#F97316] rounded-lg shadow-lg animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            />
            {/* Block 4 */}
            <div
              className="w-20 h-10 bg-linear-to-r from-[#F97316] to-[#22C55E] rounded-lg shadow-lg animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            />
            {/* Top flag */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="w-1 h-12 bg-foreground/80 rounded-full" />
              <div className="absolute -top-1 left-1 w-8 h-6 bg-[#22C55E] rounded-sm animate-wave origin-left" />
            </div>
          </div>

          {/* Crane */}
          <div className="absolute top-4 right-4 animate-crane">
            {/* Vertical pole */}
            <div className="absolute bottom-0 right-4 w-2 h-40 bg-[#F97316] rounded-full" />
            {/* Horizontal arm */}
            <div className="absolute top-0 right-0 w-24 h-2 bg-[#F97316] rounded-full" />
            {/* Cable */}
            <div className="absolute top-2 right-0 w-0.5 h-16 bg-foreground/40 animate-cable" />
            {/* Hook */}
            <div className="absolute top-18 -right-1 w-3 h-3 border-2 border-foreground/60 rounded-b-full animate-cable" />
          </div>

          {/* Floating particles */}
          <div className="absolute top-8 left-8 w-3 h-3 bg-[#3B82F6] rounded-full animate-float opacity-60" />
          <div
            className="absolute top-16 left-16 w-2 h-2 bg-[#8B5CF6] rounded-full animate-float opacity-60"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-12 right-24 w-2.5 h-2.5 bg-[#EC4899] rounded-full animate-float opacity-60"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-20 left-4 w-2 h-2 bg-[#F97316] rounded-full animate-float opacity-60"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Em Construção</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-4 max-w-md mx-auto leading-relaxed">
          Estamos trabalhando duro para trazer algo incrível para você. Esta
          página estará disponível em breve!
        </p>

        {/* BrClick Course Description */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8 max-w-lg mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Este projeto esta sendo desenvolvido como parte do{" "}
            <span className="font-semibold text-foreground">curso BrClick</span>, 
            uma plataforma de ensino focada em desenvolvimento web moderno. 
            Acompanhe nosso progresso e aprenda a criar aplicacoes incriveis!
          </p>
        </div>

        {/* Progress indicator */}
        <div className="max-w-xs mx-auto mb-10">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progresso</span>
            <span>75%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#F97316] rounded-full animate-progress"
              style={{ width: "75%" }}
            />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-5deg);
          }
        }

        @keyframes crane {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        @keyframes cable {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 75%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-crane {
          animation: crane 4s ease-in-out infinite;
          transform-origin: bottom right;
        }

        .animate-cable {
          animation: cable 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 1.5s ease-out forwards;
        }
      `}</style>
      </div>
    </>
  );
}
