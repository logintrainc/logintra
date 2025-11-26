import React from 'react';
import Technologies from './Technologies';
import Faq from './Faq';

const InfoSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Technologies Column */}
                    <div className="order-2 lg:order-1">
                        <Technologies />
                    </div>

                    {/* FAQ Column */}
                    <div className="order-1 lg:order-2">
                        <Faq />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
