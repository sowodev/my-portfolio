import { ProjectsData } from "../ProjectsData";
import Timers from "../timers/Timers";
import Tasks from "../tasks/Tasks";
import Agenda from "../agenda/Agenda";
import Notes from "../notes/Notes";
import Books from "../books/Books";
import Goals from "../goals/Goals";
import Wishlist from "../wishlist/Wishlist";
import YoutubeDown from "../youtubedown/YoutubeDown";

export const ElementsRoutes: Map<string, JSX.Element> = new Map<
  string,
  JSX.Element
>();

ElementsRoutes.set(ProjectsData[0].title, <Timers />);
ElementsRoutes.set(ProjectsData[1].title, <Tasks />);
ElementsRoutes.set(ProjectsData[2].title, <Agenda />);
ElementsRoutes.set(ProjectsData[3].title, <Notes />);
ElementsRoutes.set(ProjectsData[4].title, <Books />);
ElementsRoutes.set(ProjectsData[5].title, <Goals />);
ElementsRoutes.set(ProjectsData[6].title, <Wishlist />);
ElementsRoutes.set(ProjectsData[7].title, <YoutubeDown />);
