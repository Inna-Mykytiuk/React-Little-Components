import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ items }) => {
  let transactionNumber = 0;

  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>
      {items.map(item => {
        transactionNumber++;
        const formattedDate = new Date(item.date).toLocaleString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });
        return (
          <tbody key={item.id}>
            <Tr>
              <Td>{transactionNumber}</Td>
              <Td>{item.price}</Td>
              <Td>{item.amount}</Td>
              <Td>{formattedDate}</Td>
            </Tr>
          </tbody>
        );
      })}
    </BaseTable>
  );
};
