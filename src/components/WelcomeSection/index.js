/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { object, string, bool, func } from 'prop-types';

import WeddingImg from '../../assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground } from './styles';

// const DELAY_TIME = 1500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  // const [loading, setLoading] = useState(false);
  // const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  // const handleScrollTo = () => {
  //   /** scroll into detail view */
  //   const element = document.getElementById('fh5co-couple');
  //   element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  // };

  const handleShowDetail = () => {
    // if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    // if (!alreadyDownloadData) {
    //   setLoading(true);

    //   setTimeout(() => {
    //     setLoading(false);
    //     setAlreadyDownloadData(true);
    //     handleScrollTo();
    //   }, DELAY_TIME);
    // } else {
    //   handleScrollTo();
    // }
  };

  const renderGuestSection = () => {
    return <h2 className="to-dearest-name">Dear Friends,</h2>;
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-amin-santi" height={100} width={110} style={{maxWidth: 110}} />
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">Amin &amp; Santi</h1>
              <div className={'margin__bottom'}>
                <CountContainer />
              </div>
              {renderGuestSection()}
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
