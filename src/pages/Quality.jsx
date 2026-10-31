import React from 'react';
import apelsinImg from '../assets/apelsin.jpg';

const Quality = () => {
    return (
        <div>
            <div className="w-full max-w-4xl mx-auto p-4 bg-gray-600 rounded-2xl">
                <div className="w-full h-80 bg-cover bg-center bg-no-repeat rounded-xl flex items-center justify-center" style={{ backgroundImage: `url(${apelsinImg})` }} >
                    <h1 className="text-white text-3xl font-bold bg-black/40 px-6 py-3 rounded-lg backdrop-blur-sm"> Salom Duny </h1>
                </div>
            </div>
        </div>
    );
};

export default Quality;
