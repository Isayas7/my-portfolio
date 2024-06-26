import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCard from "@/components/CustomCard";
import HeroSection from "@/components/HeroSection";
import Skill from "@/components/Skill";
import { ModeToggle } from "@/components/themeprovider/mode-toggle";
import Link from "next/link";

export interface skill {
  render?: string;
  image: string;
  skill?: { title: string }[];
}

export interface project {
  width: number;
  height: number;
  aspectRatio?: string;
}

const skills: skill[] = [
  {
    render: "Frontend Skill",
    image: "/p1.jpg",
    skill: [
      { title: "Javascript" },
      { title: "HTML-5" },
      { title: "CSS" },
      { title: "ReactJs" },
      { title: "NextJs" },
      { title: "Tailwind" },
      { title: "Sass" },
      { title: "React Query" },
      { title: "Redux Toolkit" },
    ],
  },
  {
    render: "Backend Skill",
    image: "/p2.jpg",
    skill: [{ title: "Nosejs" }, { title: "Expressjs" }, { title: "Python" }],
  },
  {
    render: "Database Skill",
    image: "/p3.jpg",
    skill: [{ title: "MongoDb" }, { title: "Firebase" }, { title: "MySql" }],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <div className="fixed top-0 z-10 w-full px-5 border-b border-slate-900/10 dark:border-slate-300/10  py-5 backdrop-blur-2xl  dark:from-inherit  ">
        <div className="container mx-auto  w-full flex justify-between items-center">
          <Link href={""}>Logo</Link>
          <div className="flex gap-5 items-center text-card-foreground ">
            <Link href={""}>About</Link>
            <Link href={""}>Project</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>Blog</Link>
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-5">
        <section className=" place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] h-screen w-full ">
          <HeroSection />
        </section>

        <section className="min-h-screen w-full ">
          <h1 className="text-center mb-8 text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
            My Skill
          </h1>
          <div className="flex flex-wrap">
            {skills.map((item) =>
              item.render && item.image ? (
                <Skill
                  key={item.render}
                  render={item.render}
                  skill={item.skill}
                  image={item.image}
                />
              ) : null
            )}
          </div>
        </section>
        <section className="min-h-screen w-full ">
          <h1 className="text-center mb-8 text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
            My Projects
          </h1>
          <div className="  flex flex-wrap ">
            <CustomCard width={950} height={1000} aspectRatio="" />
            <CustomCard width={950} height={1000} aspectRatio="" />

            <CustomCard width={950} height={1000} aspectRatio="" />

            <CustomCard width={950} height={1000} aspectRatio="" />

            <CustomCard width={950} height={1000} aspectRatio="" />
          </div>
        </section>
        <section className="min-h-screen w-full flex items-center  ">
          <Contact />
        </section>
      </div>
    </main>
  );
}
