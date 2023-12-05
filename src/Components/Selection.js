import React, { useState } from 'react';

function Selection() {
    const [userSelections, setUserSelections] = useState({});

    const updateSelections = (question, selection) => {
        setUserSelections(prevSelections => ({
            ...prevSelections,
            [question]: selection
        }));
    };

    return (
        <div>
            {/* Pass updateSelections to each question component as a prop */}
            <CategoryQuestion updateSelections={updateSelections} />
            {/* Repeat for other question components */}
        </div>
    );
}
