import FillerProject from '../components/filler/FillerProject';
import Nft from '../components/nft/Nft';
import PodOfCast from '../components/podcast/PodOfCast';
import ProductivityDashboard from '../components/prodash/ProductivityDashboard';
import Scheduler from '../components/scheduler/Scheduler';
import Tasks from '../components/tasks/Tasks';
import Timers from '../components/timers/Timers';
import YouLearn from '../components/youlearn/YouLearn';
import YourSmile from '../components/yoursmile/YourSmile';

export const ElementsMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

ElementsMap.set('Productivity Dashboard', <ProductivityDashboard />);
ElementsMap.set('Countdown Timer', <Timers />);
ElementsMap.set('Tasks Manager', <Tasks />);
ElementsMap.set('Scheduler', <Scheduler />);
ElementsMap.set('Your Smile', <YourSmile />);
ElementsMap.set('NFT Shop', <Nft />);
ElementsMap.set('YouLearn Online', <YouLearn />);
ElementsMap.set('PodOfCast', <PodOfCast />);
ElementsMap.set('Filler Project', <FillerProject />);
