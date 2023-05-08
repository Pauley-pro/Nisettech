import React from 'react';
import { Link } from "react-router-dom";
import Image from "../images/heroimg.png";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const MainHeader = () => {
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#<CountUp end={75} duration={5} redraw={true} suffix="%" className="counts">
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>BusinessGrowthLevel</h4>
                    <h1>We help companies meet business needs</h1>
                    <p>leveraging the power of technology, boosting productivity and bringing businesses closer to the people</p>
                    <Link to="/plans" className="btn lg">Get Started</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"></div>
                    <div className="main__header-image">
                        <img src={Image} alt="Main Header Pic" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader