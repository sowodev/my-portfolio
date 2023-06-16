import Timers from "../timers/Timers";
import Tasks from "../tasks/Tasks";
import Scheduler from "../scheduler/Scheduler";
import ProductivityDashboard from "../prodash/ProductivityDashboard";
import PodOfCast from "../podcast/PodOfCast";
import YouLearn from "../youlearn/YouLearn";
import YourSmile from "../yoursmile/YourSmile";
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
ElementsMap.set("Your Smile", <YourSmile />);
ElementsMap.set("NFT Shop", <Nft />);
ElementsMap.set("YouLearn Online", <YouLearn />);
ElementsMap.set("PodOfCast", <PodOfCast />);
ElementsMap.set("Filler Project", <FillerProject />);
