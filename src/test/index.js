import React from 'react';
import ReactDOM from 'react-dom';

import sum from './sum';

ReactDOM.render(<div>{sum(1, 2)}</div>, document.getElementById('root'));
