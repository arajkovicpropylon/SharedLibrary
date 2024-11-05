import React from 'react';

interface MyDivProps {
    name: string;
}

const MyDiv: React.FC<MyDivProps> = ({name}) => {
    return <div> Hello {name}!</div>;
};

export default MyDiv;