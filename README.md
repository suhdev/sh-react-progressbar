# sh-react-progressbar 

A simple Progressbar component for ReactJS application written in TypeScript. 


## Usage 

### Webpack/JSPM Applications Usage (TypeScript) 

```TypeScript

import {Progressbar} from 'sh-react-progressbar'; 
import * as React from 'react'; 
import * as ReactDOM from 'react-dom'; 

const B = ReactDOM.render(<Progressbar value={10} />,
    document.getElementById('ProgressbarContainer')); 

```

### Browser Usage 

```html
    <link rel="stylesheet" src="path_to/Progressbar.min.css"></script>
    <script type="text/javascript" src="path_to/Progressbar.min.js"></script>

    <script type="text/javascript">
    var B = ReactDOM.render(React.createElement(ShReact.Progressbar,{value:10}),
        document.getElementById('ProgressbarContainer'));
    </script>

```
## Options

1. `value`: **required** properties which is the current value of the progressbar. 
2. `min`: **optional** the minimum value of the progressbar. 
3. `max`: **optional** the maximum value of the progressbar. 
4. `formatValue`: **optional** a callback to format the value shown on the progressbar. 
5. `className`: **optional** a class name to add to the root `div` element of the component. 