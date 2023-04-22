import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { TfiLayoutPlaceholder } from 'react-icons/tfi';
const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
  default: TfiLayoutPlaceholder,
};

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(stat => {
          const { id, title, total } = stat;

          return (
            <StatisticItem
              key={id}
              title={title}
              total={total}
              icon={icons[id] ?? icons.default}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
