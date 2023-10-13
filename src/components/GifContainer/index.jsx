import React from "react";

// eslint-disable-next-line react/prop-types
const GifContainer = ({ list }) => {
    console.log(list);

    const getGifElement = () => {
        // eslint-disable-next-line react/prop-types
        const elements = list.map(({ id, images, title }) => {
            return (
                <img
                    key={id}
                    src={images.preview_gif.url}
                    alt={title}
                    width="250"
                />
            );
        });

        return elements;
    };
    return <div>{getGifElement()}</div>;
};

export default GifContainer;
