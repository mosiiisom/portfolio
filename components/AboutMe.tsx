export default function AboutMe() {
  return (
    <div id="about" className="relative bg-black pt-20 pb-24">   {/* pt-20 gives space under fixed navbar */}
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-5xl font-semibold tracking-tight mb-12">
          Who am I?!
        </h2>
        
        <div className="prose prose-invert text-lg text-white/80 leading-relaxed">
          <p>Hi, I'm Mostafa Dehghani — most people call me <strong>Mosi</strong>.</p>
          {/* rest of your text */}
        </div>
      </div>
    </div>
  );
}