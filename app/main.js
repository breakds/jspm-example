import React from 'react'

import {reposForUser} from './api'

class HelloWorld extends React.Component {
    render() {
	return <p>Hello React</p>;
    }
}


React.render(<HelloWorld />, document.body);

reposForUser('breakds').then(repos => console.log(repos));
