import React, { useState, useEffect  } from 'react'
 import {RegistrySummaryStatement} from './RegistrySummaryStatement';

export default function ViewRegistrySummaryStatement({componentRef, data}) {
    return (
      <div>
         <RegistrySummaryStatement data={data} ref={componentRef} />
      </div>
    );
  };