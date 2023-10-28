import { BsFileEarmarkCodeFill } from "react-icons/bs";
import {
  SiCss3,
  SiPython,
  SiGnubash,
  SiHtml5,
  SiReact,
  SiMarkdown,
  SiNextdotjs,
  SiVercel,
  SiTypescript,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineFileText, AiOutlineFolderOpen } from "react-icons/ai";

type Props = {
  title?: string;
  lang: string;
};

export default function CodeTitle({ title, lang }: Props) {
  let Icon;
  let iconColor;
  switch (lang) {
    case "html":
      Icon = SiHtml5;
      iconColor = "text-orange-500"
      break;
    case "css":
      Icon = SiCss3;
      iconColor = "text-blue-500";
      break;
    case "js":
      Icon = IoLogoJavascript;
      iconColor = "text-yellow-500";
      break;
    case "bash":
      Icon = SiGnubash;
      iconColor = "text-slate-900 dark:text-white";
      break;
    case "py":
      Icon = SiPython;
      iconColor = "text-blue-400";
      break;
    case "json":
      Icon = VscJson;
      iconColor = "text-blue-500";
      break;
    case "jsx":
      Icon = SiReact;
      iconColor = "text-blue-500";
      break;
    case "text":
      Icon = AiOutlineFileText;
      iconColor = "text-slate-900 dark:text-white";
      break;
    case "md":
      Icon = SiMarkdown;
      iconColor = "text-slate-900 dark:text-white";
      break;
    case "next":
      Icon = SiNextdotjs;
      iconColor = "text-slate-900 dark:text-white";
      break;
    case "directory":
      Icon = AiOutlineFolderOpen;
      iconColor = "text-slate-900 dark:text-white";
      break;
    case "vercel":
      Icon = SiVercel;
      iconColor = "text-slate-900 dark:text-white";
      break;
    case "ts" || "tsx":
      Icon = SiTypescript;
      iconColor = "text-blue-500";
      break;
    default:
      Icon = BsFileEarmarkCodeFill;
      break;
  }
  return (
    <div className="relative !z-10"> 
 <div className=" bg-slate-800 text-white rounded-t-xl p-3  flex items-center justify-between font-mono !mt-4 ">
        <div className="flex items-center gap-2">
          <Icon className={`flex items-center w-4 h-4 ${iconColor}`} />
          <p className="!my-0 font-[500] text-sm">{title || lang}</p>
        </div>
      </div>
    </div>
  );
}
