import Image from 'next/image';

import * as styled from './styled';

function UnderConstruction() {
  return (
    <styled.wrapper>
      <styled.title>This page is coming soon!</styled.title>
      <styled.description>
        Exciting improvements are being made to our website. Thank you for your patience <br /> as we continue to
        deliver the very best features to our clients.
      </styled.description>
      <div>
        <Image src="/images/under-construction.png" alt="Under Construction" width={738} height={558} />
      </div>
    </styled.wrapper>
  );
}

export default UnderConstruction;
