import { TimelineItem } from "@/app/components/timeline/timeline/timeline-item";
import { GeneralHeader } from "@/app/components/timeline/ui/general-header";
import { SearchInput } from "@/app/components/timeline/ui/search-input";
import { redirect } from "next/navigation";
import { tweet } from "@/data/tweet";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default function Search({ searchParams }: Props) {
  if (!searchParams.q) redirect('/');

  return (
    <div>
      <GeneralHeader backHref="/">
        <SearchInput defaultValue={searchParams.q} />
      </GeneralHeader>
      <div className="border-t-2 border-[#161616]">
        <TimelineItem tweet={tweet} />
        <TimelineItem tweet={tweet} />
        <TimelineItem tweet={tweet} />
        <TimelineItem tweet={tweet} />
      </div>
    </div>
  );
}
