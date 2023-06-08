import Timers from "../timers/Timers";
import Tasks from "../tasks/Tasks";
import Agenda from "../agenda/Agenda";
import Notes from "../notes/Notes";
import Books from "../books/Books";
import Goals from "../goals/Goals";
import Wishlist from "../wishlist/Wishlist";
import YoutubeDown from "../youtubedown/YoutubeDown";

export const ElementsMap: Map<string, JSX.Element> = new Map<
  string,
  JSX.Element
>();

ElementsMap.set("Productivity Dashboard", <Books />);
ElementsMap.set("Countdown Timer", <Timers />);
ElementsMap.set("Tasks Manager", <Tasks />);
ElementsMap.set("Scheduler", <Agenda />);
ElementsMap.set("Nas File Manager", <Notes />);
ElementsMap.set("NFT Shop", <Goals />);
ElementsMap.set("Dentist", <Wishlist />);
ElementsMap.set("Chat", <YoutubeDown />);
