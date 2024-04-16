import { useState } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Upload from '../Upload/Upload';
import SignIn from './SignIn/SignIn';
import { addOverflowHiddenToBody, removeOverflowHiddenFromBody } from '../../utils/common';

export interface PageProps {
  open: boolean
  close: () => void
}

function Main() {
  const [uploadOpen, setUploadOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)


  const handleCloseOtherModals = () => {
    setUploadOpen(false)
  }

  const openUploadPage = () => {
    handleCloseOtherModals()
    setUploadOpen(true)
  }

  const openAuth = () => {
    setAuthOpen(true)
    addOverflowHiddenToBody()
  }

  const closeAuth = () => {
    setAuthOpen(false)
    removeOverflowHiddenFromBody()
  }


  return (
    <div>
      <Header authOpen={openAuth} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>
        <Card onClick={openUploadPage} image='/image1.jpg' text='Test' />
        <Card onClick={openUploadPage} image='/image1.jpg' text='Test' />
        <Card onClick={openUploadPage} image='/image1.jpg' text='Test' />
      </div>
      <Footer />
      <Upload open={uploadOpen} close={handleCloseOtherModals} />
      <SignIn open={authOpen} close={closeAuth} />
    </div>
  );
}

export default Main;
