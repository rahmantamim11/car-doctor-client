import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-khaki-one.vercel.app/Services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="mt-4 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl">Our Service Area</h2>
                <p className="text-gray-600 mt-3">
                    The majority have suffered alteration in some form, by injected humour, or randomised
                    <br className="hidden md:block" /> words which do not look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;
