import React, { useContext } from 'react';

export default function ThemedButton({themeContext}) {

    const theme = useContext(themeContext)

    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            Styled button
        </button>
    )

}