## Example
```JSX
import {ErrorMessage} from 'https-error-msg';
import React from 'react';

const LibTest = () => {
    return (
        <div>
            <ErrorMessage statusCode={enter-status-code-here}/>
        </div>
    )
}

export default LibTest
```
### Sample
```JSX
 <ErrorMessage statusCode={500}/>
```
###  Output
***500 Internal Server Error (Server misconfiguration or missing packages)***
  
