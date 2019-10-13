import React, {Component} from "react";

import Image from "./Image";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {onLoad} = this.props;
        console.log("Home " + this.props.height + " " + this.props.width);
        onLoad();
    }

    render() {
        return (
            <div className="home container" id="page" >
                <div className="row  justify-content-center">
                    <Image image={'916/43406628822_cffd9b699e_b'}/>
                    <Image image={'65535/48877432621_ff264905ac_b'}/>
                </div>
                <div className="row justify-content-center">
                    <Image image={'65535/48876898518_9f01d744c4_b'}/>
                    <Image image={'65535/48877431621_5b73d110a6_b'}/>
                </div>
            </div>
        );
    }
}