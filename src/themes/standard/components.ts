export const components = (theme: any) => ({
    MuiPickersDay: {
        styleOverrides: {
            root: {
                '&.Mui-selected': {
                    backgroundColor: `${theme.project.interactive.interactive_01} !important`,
                    '&:hover': {
                        backgroundColor: theme.project.interactive.interactive_01
                    }
                }
            },
            day: {
                color: theme.project.neutral.black
            },
            today: { color: theme.project.interactive.interactive_01, border: 'none' }
        }
    },
    MuiPickersYear: {
        styleOverrides: {
            root: {
                color: theme.project.neutral.black,
                '&:active': {
                    color: theme.project.interactive.interactive_01
                }
            },

            yearSelected: {
                color: theme.project.interactive.interactive_01
            }
        }
    },
    MuiPickersMonth: {
        styleOverrides: {
            root: {
                color: theme.project.neutral.black,
                '&:active': {
                    color: theme.project.interactive.interactive_01
                }
            },

            monthSelected: {
                color: theme.project.interactive.interactive_01
            }
        }
    }
});

export default components;
