import React from 'react';
import { FaCrown } from "react-icons/fa"
import SectionHead from './SectionHead';
import { services } from "../data"
import Card from '../UI/Card';
 
const Services = () => {
    return (
        <section className="programs">
            <div className="container programs__container">
                <SectionHead icon={<FaCrown />} title="Our Services" />
                <div className="programs__wrapper">
                    {
                        services.map(({ id, icon, title, info }) => {
                            return (
                                <Card className="programs__program" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;