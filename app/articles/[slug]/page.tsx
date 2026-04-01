import { crimson } from "@/app/layout";
import { Footnotes } from "@/components/Articles/components/footnotes";
import { LeadCaptureSection } from "@/components/Home/components/lead-capture-section";
import {
  ArrowRight03Icon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    href: "https://twitter.com",
    icon: TwitterIcon,
  },
  {
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    href: "https://youtube.com",
    icon: YoutubeIcon,
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

async function Page({ params }: Props) {
  const slug = (await params).slug;

  return (
    <div className="flex flex-col">
      <div className="max-w-6xl mx-auto flex w-full">
        <div className="flex-3 border-r flex flex-col gap-28">
          <div className="flex flex-col gap-6 py-28">
            <h2 className="text-5xl leading-[1.4] font-medium tracking-tight w-xl">
              The Blood That Was Never Meant to Awaken
            </h2>
            <div className="flex gap-2 text-sm text-neutral-600">
              <span className={`${crimson.className}`}>written by</span>
              <span className="font-medium uppercase">Vedant Lamba</span>
              <span className="block w-[1px] my-1 bg-muted-foreground"></span>
              <span className="uppercase font-medium">
                Dark Fantasy, Indian Mythology
              </span>
            </div>
          </div>
          <div className={`space-y-6 text-xl ${crimson.className} w-xl`}>
            <p>There are stories we tell the world.</p>

            <p>
              And then there are truths buried so deep… even time forgets them.
            </p>

            <p>
              The clans were never created to rule. They were created to
              contain.
            </p>

            <p>
              Power—real power—was never meant to exist freely among men. So it
              was divided. Named. Controlled.
            </p>

            <p>
              Shiva took destruction and gave it discipline. Kali took chaos and
              gave it form. Durga built balance. Vishnu mastered control.
            </p>

            <p>And for centuries… it worked.</p>

            <p>Until something was born that did not belong to balance.</p>
            <p>They called it a mistake.</p>

            <p>
              A fracture between gods. A convergence that should have never
              happened.
            </p>

            <p>Not destruction. Not chaos. But something far worse—</p>

            <p>Something that understood both.</p>

            <p>The Bhairava bloodline was never meant to live.</p>

            <p>
              It did not follow rules. It did not answer to hierarchy. It did
              not seek control.
            </p>

            <p>It simply… was.</p>

            <p>And that terrified them.</p>

            <p>So they sealed it.</p>

            <p>Not out of hatred. Not out of fear of evil.</p>

            <p>But because some powers don’t corrupt.</p>

            <p>They erase the need for control entirely.</p>

            <p>Legends say the seal was perfect.</p>

            <p>Unbreakable. Eternal.</p>

            <p>
              But legends are written by those who survived… not by those who
              return.
            </p>

            <p>And now—</p>

            <p>Something has changed.</p>

            <p>
              The balance feels… thinner. The silence between clans… heavier.
            </p>

            <p>As if the world itself knows—</p>

            <p>something is waking up.</p>

            <p>Not a god. Not a warrior. Not a king.</p>

            <p>But a bloodline that was never meant to exist again.</p>
          </div>
          <div>
            <Footnotes />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between py-20">
          <div className="p-10 flex flex-col gap-5">
            <span className="uppercase tracking-wide text-sm font-medium text-neutral-500">
              About the Author
            </span>
            <span className="block w-full h-[0.1px] bg-neutral-200"></span>
            <p className={`text-lg ${crimson.className}`}>
              <span className="font-bold">Vedant Lamba</span> {""}
              writes about habits, decision-making, and continuous
              self-improvement. He shares ideas that help individuals build
              discipline, think clearly, and grow consistently in both life and
              work.
            </p>
            <span className="block w-full h-[0.1px] bg-neutral-200"></span>
            <span>Follow Me On:</span>
            <div className="flex items-center gap-4">
              {socialLinks.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-neutral-500 hover:text-neutral-800 duration-200"
                    target="_blank"
                  >
                    <HugeiconsIcon icon={item.icon} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="p-10 flex flex-col gap-5">
            <span className="uppercase tracking-wide text-sm font-medium text-neutral-500">
              Read Next
            </span>
            <span className="block w-full h-[0.1px] bg-neutral-200"></span>
            <p className={`text-xl leading-[1.5] ${crimson.className}`}>
              Creativity Isn’t Talent — It’s Controlled Chaos
            </p>
            <span className="block w-full h-[0.1px] bg-neutral-200"></span>
            <p className={`text-xl leading-[1.5] ${crimson.className}`}>
              Focus Is a Weapon — Learn to Use It
            </p>
            <span className="block w-full h-[0.1px] bg-neutral-200"></span>
            <span className="uppercase tracking-wide text-sm font-medium flex gap-1 items-center">
              All Articles
              <HugeiconsIcon icon={ArrowRight03Icon} />
            </span>
          </div>
        </div>
      </div>

      <LeadCaptureSection />
    </div>
  );
}

export default Page;
