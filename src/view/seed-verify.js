import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import SeedInput from '../component/seed-input';

//
// Seed Verify View
//

const SeedVerifyView = ({ store, nav, wallet }) => (
  <SeedInput
    title="Let's double check"
    copy={store.seedVerifyCopy}
    navBack={nav.goSeed}
    seedInputs={store.wallet.seedVerify}
    indexes={store.seedVerifyIndexes}
    setSeedVerify={wallet.setSeedVerify}
    checkSeed={wallet.checkSeed}
  />
);

SeedVerifyView.propTypes = {
  store: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
  wallet: PropTypes.object.isRequired,
};

export default observer(SeedVerifyView);
