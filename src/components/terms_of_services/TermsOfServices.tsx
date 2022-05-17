import dataService from 'src/services/dataService';

import * as styled from './styled';

function TermsOfServices() {
  const data = dataService.getTermsOfServices();

  function renderChildrenItems(items) {
    if (!items?.length) return null;

    return items.map((item, index) => {
      return (
        <styled.childContainer key={index}>
          <styled.childTitle>{item.title}</styled.childTitle>
          <styled.description dangerouslySetInnerHTML={{__html: item.description}} />
          {renderChildrenList(item.list)}
        </styled.childContainer>
      );
    });
  }

  function renderChildrenList(list) {
    if (!list?.length) return null;

    return (
      <ul>
        {list.map((item, index) => {
          return <styled.childListItem key={index} dangerouslySetInnerHTML={{__html: item}} />;
        })}
      </ul>
    );
  }

  function render() {
    return (
      <styled.wrapper>
        <styled.container>
          <styled.title>{data.title}</styled.title>
          <styled.subtitle>{data.subtitle}</styled.subtitle>
          <styled.lastUpdated>{data.lastUpdated}</styled.lastUpdated>
          <styled.description>{data.description}</styled.description>

          {data.list.map((item, index) => {
            const indexNumber = index + 1;

            return (
              <styled.itemContainer key={index}>
                <styled.itemTitle>
                  {indexNumber}. {item.title}
                </styled.itemTitle>
                <styled.description dangerouslySetInnerHTML={{__html: item.description}} />

                {renderChildrenItems(item.items)}
                {renderChildrenList(item.list)}
              </styled.itemContainer>
            );
          })}
        </styled.container>
      </styled.wrapper>
    );
  }

  return render();
}

export default TermsOfServices;
