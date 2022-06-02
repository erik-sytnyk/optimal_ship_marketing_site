import {useState} from 'react';

import navigationHelper from 'src/helpers/navigationHelper';

import Button from 'src/components/common/Button';

import * as styled from './styled';

function SearchInput() {
  const [trackingNumber, setTrackingNumber] = useState('');

  function trackingHandler() {
    if (!trackingNumber) return;

    const trackingUrl = navigationHelper.getDHLTrackingUrl(trackingNumber);
    window.open(trackingUrl, '_blank');
  }

  return (
    <styled.container>
      <styled.input
        name="trackingNumber"
        placeholder="Enter Any Tracking Nr."
        value={trackingNumber}
        onChange={e => setTrackingNumber(e.target.value)}
      />

      <Button searchButton onClick={trackingHandler}>
        Search
      </Button>
    </styled.container>
  );
}

export default SearchInput;
