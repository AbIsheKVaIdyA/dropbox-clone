import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5 ">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br />
            <br />
            Storing everything for you and your business needs.All in one place
          </h1>

          <p className="pb-20">
            The information provided is for informational purposes only. We do
            not guarantee its accuracy or reliability. Any action you take based
            on this information is at your own risk. It is advisable to consult
            with qualified professionals for personalized advice. Opinions
            expressed are those of the authors and not necessarily endorsed by
            us.
          </p>

          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit">
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
            type="video/mp4"
            />
            Your browser does not support the video tag.

          </video>
           
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        The information provided is for general purposes only and should not be
        considered as professional advice. Reliance on the content is at your
        own risk. We do not guarantee the accuracy, completeness, or suitability
        of the information. Always seek advice from qualified professionals for
        specific concerns. Opinions expressed are those of the authors and not
        necessarily endorsed by us.
      </p>
    </main>
  );
}
