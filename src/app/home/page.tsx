import { TfiWorld } from 'react-icons/tfi';
import { Card } from './_components/Card';
import { HeroImg } from './_components/HeroImg';
import {
  MdComputer,
  MdOutlinePhoneAndroid,
  MdOutlineShowChart,
} from 'react-icons/md';
import { GetStarted } from './_components/GetStarted';

const data = [
  {
    icon: <MdOutlinePhoneAndroid size={30} />,
    title: 'Mobile Apps',
    data: `We design and develop iOS and Android apps that are intuitive,
                  engaging, and scalable.`,
  },
  {
    icon: <MdComputer size={30} />,
    title: 'Web apps',
    data: `We build responsive, high-performance web apps using modern technologies like React and Vue.`,
  },
  {
    icon: <TfiWorld size={30} />,
    title: 'APIs & integrations',
    data: `We help you connect your app with third-party services and internal systems for a seamless experience.`,
  },
  {
    icon: <MdOutlineShowChart size={30} />,
    title: 'Analytics & optimization',
    data: `We use data and user feedback to refine your app,  improve performance, and increase user satisfaction.`,
  },
];
export default function Home() {
  return (
    <section className='min-h-screen w-full  p-4'>
      <div className='flex h-[60rem] w-full flex-col gap-6'>
        <HeroImg />
        <h2 className='text-4xl font-bold tracking-wider'>Our Services</h2>
        <section className='flex h-[40rem] w-full gap-4 max-md:flex-col'>
          {data.map((props) => (
            <Card key={props.title} {...props} />
          ))}
        </section>
        <div>
          <GetStarted />
        </div>
      </div>
    </section>
  );
}
