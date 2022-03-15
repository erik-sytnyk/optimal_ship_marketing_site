import {useState} from 'react';

import navigationHelper from '../helpers/navigationHelper';

import Button from './button';

function SearchInput() {
  const [trackingNumber, setTrackingNumber] = useState('');

  function trackingHandler() {
    if (!trackingNumber) return;

    const trackingUrl = navigationHelper.getDHLTrackingUrl(trackingNumber);
    window.open(trackingUrl, '_blank');
  }

  return (
    <div className="tracking-number-container">
      <input
        name="trackingNumber"
        className="custom-input search-input"
        placeholder="Enter Any Tracking Nr."
        value={trackingNumber}
        onChange={e => setTrackingNumber(e.target.value)}
      />

      <Button searchButton onClick={trackingHandler}>
        Search
      </Button>
    </div>
  );
}

export default SearchInput;
