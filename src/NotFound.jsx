import React from 'react';

import {Link} from "react-router-dom";

import {Label} from 'Common/Label.jsx'
import {paths} from 'Common/Paths.jsx'

class NotFound extends React.PureComponent {
    render () {
        const {match: {url}} = this.props
        return <div>
            <Label text={`404 ${url} not found`}/>
            <br />
            <Link to={paths.ROOT_PATH}>HOME</Link>
        </div>
    }
}


export {NotFound}
