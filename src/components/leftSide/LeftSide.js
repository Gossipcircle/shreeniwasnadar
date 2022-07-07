import React from 'react';
import Avatar from '../avatar/Avatar';
import SocialList from '../social/SocialLists';
import './LeftSide.scss';

const LeftSide = () => (
    <>
        <div className="col-12 col-md-6 left-back d-flex align-items-center">
            <div className="d-flex flex-column align-items-center borde">
                <Avatar margin />
                <div className="d-flex justify-content-center flex-wrap align-items-baseline">
                    <p className="o-font-lg text-white1 mb-1 mb-sm-3">Hi, I am </p>
                    <h1 className="o-font-lg ml-2 o-text-purple"> Shreeniwas Nadar</h1>
                </div>
                <p className="text-center text-white1">I am a FullStack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                <SocialList margin />
                <div className="row mb-5 justify-content-center">
                    <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" className="d-block m-3 text-white o-btn text-center py-2 position-relative">DOWNLOAD CV</a>
                    <a href="/" className="d-block m-3 text-white o-btn text-center py-2 position-relative">CONTACT ME</a>
                </div>
            </div>
        </div>
    </>
);

export default LeftSide;