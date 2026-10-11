
import Categories from "@/app/components/Categories";
import PriceTicker from "@/app/components/Marque";
import DateLabel from "@/app/components/DateLabel";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="w-full border-b bg-white">
     
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🛒</span> </Link>
          <div>
            <h1 className="font-bold">বাজার দর</h1>
            <DateLabel />
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <a href="/signin" className="hover:text-green-700">
            সাইন ইন
          </a>
          <a
            href="/signup"
            className="rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700"
          >
            সাইন আপ
          </a>
        </div>
      </div>

   
      <Categories />
      <PriceTicker />
    </header>
  );
};

export default Navbar;