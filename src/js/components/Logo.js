import React from 'react';
import BrandLogo from 'grommet/components/icons/base/PlatformHpi';

export default function Logo (props) {
  return (
    <div className={'logo-hpe'}>
    	<a href="#">
        <BrandLogo size="large" colorIndex="brand" />
      </a>
    </div>
  );
}
