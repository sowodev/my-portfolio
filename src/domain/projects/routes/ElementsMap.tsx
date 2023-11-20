import FillerProject from '../components/filler/FillerProject';
import Nft from '../nft/Nft';
import PodOfCast from '../podcast/PodOfCast';
import ProductivityDashboard from '../prodash/ProductivityDashboard';
import Scheduler from '../scheduler/Scheduler';
import Tasks from '../tasks/Tasks';
import Timers from '../timers/Timers';
import YouLearn from '../youlearn/YouLearn';
import YourSmile from '../yoursmile/YourSmile';

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
