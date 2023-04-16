import React, {Component} from 'react'

class WichColor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: false
        }
    }
    render() {
        return this.state.color ? ( <div>Vilken färg vill du ha på blomman? grön</div>
        ) : ( <div>Vilken färg vill du ha på blomman? röd</div> )
    }

}

export default WichColor
