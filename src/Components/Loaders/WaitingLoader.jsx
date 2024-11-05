import React from 'react';
import { useToast } from './ToastContext';

import '../../Style/loader.css'

function WaitingLoader() {
  const { waitingLoader } = useToast()
  if (!waitingLoader) return null;  
  return (
    <div className='loaderwrapper'>
      <div className="loader"></div>
    </div>
  )
}

export default WaitingLoader