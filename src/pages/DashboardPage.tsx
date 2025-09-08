import { NameTyping } from "@/components/dashboard/NameTyping";
import SocialButtons from "@/components/dashboard/SocialButtons";
import { TypographyLead } from "@/components/ui/typography";
import { Instagram } from "lucide-react";

const redirectTo = (url: string) => {
  window.open(url, "_blank");
};

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-1">
      <NameTyping />
      <div>
        {TypographyLead("21-year-old software engineer")}
        {TypographyLead("from Italy")}
      </div>

      <SocialButtons />
    </div>
  );
};

export default DashboardPage;
