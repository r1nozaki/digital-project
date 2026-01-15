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
      'The Royal Alberta Museum, located in Edmonton, is the largest museum in western Canada. It features extensive exhibitions on natural history, Indigenous cultures, human history, and wildlife of Alberta. The museum is known for its modern interactive displays, large collections of fossils and artifacts, and strong educational focus. It also includes one of the largest insect collections in Canada and detailed dioramas that recreate natural environments. The museum plays an important role in research, conservation, and public education.',
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
      'The Sydney Opera House is an iconic performing arts venue situated on Sydney Harbour in Australia. Designed by Danish architect Jørn Utzon, it is famous for its unique sail-shaped roof structure. The building hosts a wide range of performances, including opera, theater, ballet, and concerts. Its construction was a major engineering challenge and took over a decade to complete. Today, it is a symbol of innovation, creativity, and Australia’s cultural identity.',
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
      'The Colosseum is a massive ancient amphitheater in the center of Rome, built in the 1st century AD. It could hold tens of thousands of spectators who watched gladiator fights, animal hunts, and public events. Constructed using advanced Roman engineering techniques, it featured complex systems of underground passages and elevators. The Colosseum has survived fires, earthquakes, and centuries of stone removal, yet it remains one of the most visited monuments in the world.',
    summary:
      'The Colosseum is an ancient amphitheater located in Rome, Italy. Built during the Roman Empire, it was used for gladiator battles, public spectacles, and entertainment. Today, it stands as one of the most famous historical landmarks in the world and a symbol of ancient Roman engineering and culture.',
  },
];
