import { Waveform } from "@uiball/loaders";

export default function Loading() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-center text-lg sm:text-4xl">
        Dashboard is loading...
      </h1>
      <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
    </section>
  );
}
