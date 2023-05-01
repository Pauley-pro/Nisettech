import React from 'react';
import Image from "../images/values.jpg";
import SectionHead from './SectionHead';
import { GiCutDiamond } from "react-icons/gi"
import { values } from '../data';
import Card from '../UI/Card';

const Values = () => {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Value Pic" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond />} title="Values" />
                    <p>Our team of passionate developers is ready to turn your ideas into unique and outstanding products from small coding tasks to building performant and scalable products
            that suit your brands, improve your productivity and bring you closer to your clients.</p>
                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return <Card key={id} className="values__value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values