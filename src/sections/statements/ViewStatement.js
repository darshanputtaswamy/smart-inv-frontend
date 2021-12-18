import React, { useState, useEffect  } from 'react'
 import {Statement} from './Statement';

export default function ViewStatement({componentRef, lobDetails,statementSummary}) {
    return (
      <div>
         <Statement lobDetails={lobDetails} statementSummary={statementSummary}  ref={componentRef} />
      </div>
    );
  };