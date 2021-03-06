import React, {Component} from 'react';

import Banner from "../../banner";
import SerCon from "../serCon";
import CoopAdv from "../coopAdv";
import CoopAdvInfo from "../coopAdvInfo";
import Issue from "../issue";
import Pub from "../pub";
import Contact from "../../contact";
import Footer from "../../footer";






class Serve extends Component {

    componentDidMount() {
        this.node.scrollIntoView()
    }


    render() {
        return (
            <div ref={node => this.node = node}>
                <Banner />
                <SerCon />
                <CoopAdv />
                <CoopAdvInfo />
                <Issue />
                <Pub />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Serve;