import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

//передаємо масив з даними, далі в елемент прокидуємо деструктуровані елементи з масиву forbes
export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>
      <LeaderBoardProfiles>
        {list.map(item => {
          return <ForbesListItem key={item.id} {...item} />;
        })}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
