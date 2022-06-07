import * as styled from './Strip.styled';

interface Props {
  items: string[];
  page: 'careers' | 'about';
}

function Strip({items, page}: Props) {
  return (
    <styled.wrapper page={page}>
      {items.map(item => {
        return (
          <styled.container key={item} page={page}>
            {item}
          </styled.container>
        );
      })}
    </styled.wrapper>
  );
}

export default Strip;
