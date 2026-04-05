import { crimson } from "@/app/layout";
import { Footnotes } from "@/components/Articles/components/footnotes";
import { LeadCaptureSection } from "@/components/shared/lead-capture-section";
import { LongformPageLayout } from "@/components/shared/longform-page-layout";
import { articleDetailPageContent } from "@/lib/content/article-detail-page";
import {
  ArrowRight03Icon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const socialIcons = {
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
} as const;

interface Props {
  params: Promise<{ slug: string }>;
}

async function Page({ params }: Props) {
  const slug = (await params).slug;

  return (
    <LongformPageLayout
      title="The Blood That Was Never Meant to Awaken"
      meta={
        <div className="flex flex-wrap gap-2 text-xs text-neutral-600 min-[1100px]:text-sm">
          <span className={`${crimson.className} text-sm`}>written by</span>
          <span className="font-medium uppercase">Vedant Lamba</span>
          <span className="my-1 hidden w-[1px] bg-muted-foreground md:block"></span>
          <span className="font-medium uppercase">
            Dark Fantasy, Indian Mythology
          </span>
        </div>
      }
      content={
        <>
          <p>There are stories we tell the world.</p>
          <p>And then there are truths buried so deep... even time forgets them.</p>
          <p>The clans were never created to rule. They were created to contain.</p>
          <p>
            Power, real power, was never meant to exist freely among men. So it
            was divided. Named. Controlled.
          </p>
          <p>
            Shiva took destruction and gave it discipline. Kali took chaos and
            gave it form. Durga built balance. Vishnu mastered control.
          </p>
          <p>And for centuries... it worked.</p>
          <p>Until something was born that did not belong to balance.</p>
          <p>They called it a mistake.</p>
          <p>
            A fracture between gods. A convergence that should have never
            happened.
          </p>
          <p>Not destruction. Not chaos. But something far worse...</p>
          <p>Something that understood both.</p>
          <p>The Bhairava bloodline was never meant to live.</p>
          <p>
            It did not follow rules. It did not answer to hierarchy. It did not
            seek control.
          </p>
          <p>It simply... was.</p>
          <p>And that terrified them.</p>
          <p>So they sealed it.</p>
          <p>Not out of hatred. Not out of fear of evil.</p>
          <p>But because some powers do not corrupt.</p>
          <p>They erase the need for control entirely.</p>
          <p>Legends say the seal was perfect.</p>
          <p>Unbreakable. Eternal.</p>
          <p>
            But legends are written by those who survived... not by those who
            return.
          </p>
          <p>And now...</p>
          <p>Something has changed.</p>
          <p>The balance feels... thinner. The silence between clans... heavier.</p>
          <p>As if the world itself knows...</p>
          <p>something is waking up.</p>
          <p>Not a god. Not a warrior. Not a king.</p>
          <p>But a bloodline that was never meant to exist again.</p>
        </>
      }
      footnotes={<Footnotes />}
      aside={
        <>
          <div className="flex flex-col gap-5 p-10">
            <span className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              {articleDetailPageContent.authorSectionTitle}
            </span>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <p className={`text-lg ${crimson.className}`}>
              <span className="font-bold">{articleDetailPageContent.authorName}</span>{" "}
              {articleDetailPageContent.authorDescription}
            </p>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <span>{articleDetailPageContent.followLabel}</span>
            <div className="flex items-center gap-4">
              {articleDetailPageContent.socialLinks.map((item, index) => {
                const icon = socialIcons[item.platform];

                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-neutral-500 duration-200 hover:text-neutral-800"
                    target="_blank"
                  >
                    <HugeiconsIcon icon={icon} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5 p-10">
            <span className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              Read Next
            </span>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <p className={`text-xl leading-[1.5] ${crimson.className}`}>
              Creativity Isn&apos;t Talent - It&apos;s Controlled Chaos
            </p>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <p className={`text-xl leading-[1.5] ${crimson.className}`}>
              Focus Is a Weapon - Learn to Use It
            </p>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <span className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide">
              All Articles
              <HugeiconsIcon icon={ArrowRight03Icon} />
            </span>
          </div>
        </>
      }
      footer={<LeadCaptureSection />}
    />
  );
}

export default Page;
