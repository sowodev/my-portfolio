import Timers from "../timers/Timers";
import Tasks from "../tasks/Tasks";
import Scheduler from "../scheduler/Scheduler";
import ProductivityDashboard from "../prodash/ProductivityDashboard";
import Chat from "../chat/Chat";
import Dentist from "../dentist/Dentist";
import Nas from "../nas/Nas";
import Nft from "../nft/Nft";
import FillerProject from "../filler/FillerProject";

export const ElementsMap: Map<string, JSX.Element> = new Map<
  string,
  JSX.Element
>();

ElementsMap.set("Productivity Dashboard", <ProductivityDashboard />);
ElementsMap.set("Countdown Timer", <Timers />);
ElementsMap.set("Tasks Manager", <Tasks />);
ElementsMap.set("Scheduler", <Scheduler />);
ElementsMap.set("Nas File Manager", <Nas />);
ElementsMap.set("NFT Shop", <Nft />);
ElementsMap.set("Dentist", <Dentist />);
ElementsMap.set("Chat", <Chat />);
ElementsMap.set("Filler Project", <FillerProject />);
