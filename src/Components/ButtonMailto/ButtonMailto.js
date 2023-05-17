import React from "react";


const ButtonMailto = ({ email, label }) => {
    return (
        <a href={`mailto:${email}`} >
            {label}
        </a>
    );
};

export default ButtonMailto;