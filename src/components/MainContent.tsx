import React, { useState } from 'react';

const MainContent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>MAIN CONTENT</div>
    );
}

export default MainContent  ;
