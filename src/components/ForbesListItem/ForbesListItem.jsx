import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import {
  ForbesItem,
  Avatar,
  Name,
  Capital,
  Icon,
} from './ForbesListItem.styled';

import { theme } from 'styles/theme';

//передаємо деструктуровані елементи з масиву forbes

export const ForbesListItem = ({ name, capital, avatar, isIncrease }) => {
  const IconComponent = isIncrease ? FcBullish : FcBearish;

  return (
    <ForbesItem>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Capital>
        {capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        <Icon>
          <IconComponent />
        </Icon>
      </Capital>
    </ForbesItem>
  );
};
