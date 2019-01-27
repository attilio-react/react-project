import React from 'react';

import {Label} from 'Common/Label.jsx'

class NotFound extends React.PureComponent {
    render () {
        const {match: {url}} = this.props
        return <div>
            <Label text={`404 ${url} not found`}/>
        </div>
    }
}


export {NotFound}
