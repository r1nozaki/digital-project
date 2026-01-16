import {
  preview1,
  preview2,
  preview3,
  project1Additional,
  project1Main,
  project2Additional,
  project2Main,
  project3Additional,
  project3Main,
} from '@/assets/Projects';

import { type ProjectItem } from '@/types/Projects';

export const projectsData: ProjectItem[] = [
  {
    id: '1',
    title: 'Royal Alberta Museum',
    preview: preview1,
    mainImage: project1Main,
    additionalImage: project1Additional,
    description:
      'The Royal Alberta Museum, located in Edmonton, is the largest museum in western Canada. It features extensive exhibitions on natural history, Indigenous cultures, human history, and wildlife of Alberta. The museum is known for its modern interactive displays, large collections of fossils and artifacts, and strong educational focus. It also includes one of the largest insect collections in Canada and detailed dioramas that recreate natural environments. Housed in a stunning modern facility in the Arts District, the museum spans over 400,000 square feet and includes a dedicated Children’s Gallery designed for hands-on learning. The Natural History Hall takes visitors on a journey through time, featuring towering skeletons of Ice Age giants like mammoths and mastodons that once roamed the province. Guests can also explore the Gems and Minerals room, which showcases glittering crystals from the Rocky Mountains. The Human History Hall chronicles the stories of Alberta’s people, highlighting the rich traditions of First Nations and Métis communities alongside the experiences of settlers. A visitor favorite is the live Bug Gallery, where exotic invertebrates, from tarantulas to walking sticks, can be observed up close. Beyond exhibitions, the museum plays a vital role in research and conservation, preserving millions of specimens to safeguard the province’s heritage for future generations.',
    summary:
      'The Royal Alberta Museum is a major cultural and natural history museum in Edmonton, Canada. It showcases Alberta’s history, Indigenous cultures, art, and natural sciences through interactive and modern exhibitions. The museum also plays an important role in education, research, and the preservation of the province’s heritage.',
  },
  {
    id: '2',
    title: 'Sydney Opera House',
    preview: preview2,
    mainImage: project2Main,
    additionalImage: project2Additional,
    description:
      'The Sydney Opera House is an iconic performing arts venue situated on Bennelong Point in Sydney Harbour, Australia. Designed by Danish architect Jørn Utzon, it is famous for its unique series of gleaming white sail-shaped shells. These structures are actually covered in over one million chevron-shaped Swedish tiles that create a pearlescent effect against the sea and sky. The building is a multi-venue complex that hosts a wide range of performances, including opera, theater, ballet, and symphony concerts. Its largest interior space, the Concert Hall, features the Grand Organ, which is the largest mechanical tracker action organ in the world. The construction of the Opera House was a massive engineering saga marked by technical challenges and political controversy, taking over 14 years to complete before its opening by Queen Elizabeth II in 1973. Beyond its function as a performance center, it is a UNESCO World Heritage Site and a masterpiece of 20th-century expressionist architecture. Its open-air forecourt serves as a focal point for community celebrations and offers breathtaking views of the adjacent Sydney Harbour Bridge.',
    summary:
      'The Sydney Opera House is a world-famous performing arts center located in Sydney, Australia. Known for its distinctive sail-like design, it is an architectural icon and a UNESCO World Heritage Site. The building hosts concerts, opera, theater, and other cultural events, making it a key symbol of Australia’s cultural life.',
  },
  {
    id: '3',
    title: 'Colosseum',
    preview: preview3,
    mainImage: project3Main,
    additionalImage: project3Additional,
    description:
      'The Colosseum, originally known as the Flavian Amphitheatre, is a massive oval amphitheater in the center of Rome and the largest ever built. Commissioned by Emperor Vespasian and completed in 80 AD by his son Titus, it stands as a testament to the grandeur of Imperial Rome. The structure could hold up to 80,000 spectators, arranged in a strict social hierarchy, to watch gladiator contests, public spectacles, and wild animal hunts. A masterpiece of engineering, it was constructed using travertine limestone, tuff, and brick-faced concrete, featuring eighty entrance arches to manage crowds. Beneath the arena floor lay the hypogeum, an elaborate two-story underground network of tunnels and cages. Here, gladiators and exotic animals waited before being hoisted up through trapdoors using sophisticated pulley systems to surprise the audience. In ancient times, a massive retractable awning known as the velarium shielded spectators from the scorching sun. Although damaged by earthquakes and stone robbers over the centuries, the Colosseum remains an iconic symbol of Roman power and is recognized today as one of the New Seven Wonders of the World.',
    summary:
      'The Colosseum is an ancient amphitheater located in Rome, Italy. Built during the Roman Empire, it was used for gladiator battles, public spectacles, and entertainment. Today, it stands as one of the most famous historical landmarks in the world and a symbol of ancient Roman engineering and culture.',
  },
];
