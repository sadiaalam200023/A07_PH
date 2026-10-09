
import banner from "@/bazar-hero.png"
import Image from 'next/image';
const Hero = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",});
    
    return (
  <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="flex flex-col items-center gap-8 rounded-3xl md:flex-row md:gap-10 lg:gap-16 bg-amber-50">
      
      <div className="flex w-full flex-col items-start gap-4 md:w-3/5 lg:w-2/3 px-10 mt-2 mb-2">
        <div className="rounded-full bg-green-100 px-4 py-2">
          <span className="text-sm font-medium text-green-700 sm:text-base">
            {date}
          </span>
        </div>

        <h2 className="text-2xl leading-snug font-bold sm:text-3xl lg:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h2>

        <p className="text-sm leading-7 text-gray-600 sm:text-base">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <div className="mt-2">
         
          <button className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700">
            সব পণ্য দেখুন
          </button>
        </div>
      </div>

      
      <div className="w-full md:w-2/5 lg:w-1/3">
        <Image
          src={banner}
          alt="বাজার দর ব্যানার"
          className="h-auto max-h-80 w-full rounded-2xl object-cover sm:max-h-96 md:max-h-none"
          priority
        />
      </div>
    </div>
  </section>
);
};

export default Hero;