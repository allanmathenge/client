export const colorTokens = {
    grey: {
        0: "#F2F2F2",
        10: "#FFFFFF",
        20: "#F0F0F0",
        30: "#FF3F3F",
        40: "#F4F4F4",
        50: "#F5F5F5"
    },
    primary: {
        100: "#F212121",
        200: "#BD22222",
        300: "#A1A1A1",
        400: "#A2A2A2",
        500: "#A3A3A3",
        600: "#A4A4A4",
        700: "#A5A5A5",
        800: "#A6A6A6",
        900: "#A7A7A7",
    },
}


export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
            ? {
                primary: {
                    
                },
                neutral : {

                },
                background: {

                }
            } 
            : {
                primary: {

                },
                neutral: {

                },
                background: {

                }
            } 
            )
        }
    }
}