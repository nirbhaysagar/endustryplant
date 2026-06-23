'use client';

import dynamic from 'next/dynamic';
import GrainOverlay from '@/components/GrainOverlay';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ThePlant from '@/components/ThePlant';
import Capabilities from '@/components/Capabilities';

// Dynamically import heavy / client-only components
// const ExperimentalShowcase = dynamic(() => import('@/components/ExperimentalShowcase'), { ssr: false });
const ManufacturingProcess = dynamic(() => import('@/components/ManufacturingProcess'), { ssr: false });
const ProblemSolution = dynamic(() => import('@/components/ProblemSolution'), { ssr: false });
const Library = dynamic(() => import('@/components/Library'), { ssr: false });
const Manifesto = dynamic(() => import('@/components/Manifesto'), { ssr: false });
const TerminalFooter = dynamic(() => import('@/components/TerminalFooter'), { ssr: false });

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <ThePlant />
        <ProblemSolution />
        <Capabilities />
        {/* <ExperimentalShowcase /> */}
        <ManufacturingProcess />
        <Library />
        <Manifesto />
      </main>
      <TerminalFooter />
    </>
  );
}
