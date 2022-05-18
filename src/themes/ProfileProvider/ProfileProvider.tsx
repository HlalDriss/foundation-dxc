// import React, { useEffect, useState } from 'react';
// import { createTheme, StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';

// import { appConfig, getProfiles, getThemes, refreshLanguageInApiCall } from 'dxc/appConfig';
// import { changeCurrentLanguage } from 'dxc/i18n';
// import { localizationProfileChange } from 'dxc/localization';
// import standardTheme from '../../themes/standard';
// import queryClient from 'dxc/queryClient';

// declare module '@mui/styles/defaultTheme' {
//     // eslint-disable-next-line @typescript-eslint/no-empty-interface
//     interface DefaultTheme extends Theme {}
// }

// // Context provider object
// export const ProfileContext = React.createContext({
//     themeCode: 'standard',
//     currentTheme: { theme: {} },
//     profileCode: '',
//     currentProfile: undefined,
//     updateProfile: null
// });

// const ProfileProvider = (props: any) => {
//     // eslint-disable-next-line react/prop-types
//     const { children } = props;
//     const profiles = getProfiles();

//     const profileCode = appConfig.profileCode;
//     let defaultProfile: any;
//     // To handle in case the given profileCode is not in the profile list. In that case we will take the first in the list
//     if (profiles[profileCode]) {
//         defaultProfile = profiles[profileCode];
//     }
//     else {
//         defaultProfile = Object.values(profiles)[0];
//     }

//     const initialValue = { ...defaultProfile, ...JSON.parse(localStorage.getItem('appProfile') ?? '{}') };
//     const [savingProfile, setSavingProfile]: any = useState(initialValue);
//     const profile = savingProfile;

//     useEffect(() => {
//         changeCurrentLanguage(profile.language);
//         localizationProfileChange(profile);
//         // Invalidating all the queries in react query will call api again after language change.
//         refreshLanguageInApiCall();
//         queryClient.invalidateQueries();
//     }, [profile]);

//     // Can be used to update profile, theme or language
//     const updateProfile = (profileCodeGiven: string, override?: any) => {
//         const profileLocal = profiles[profileCodeGiven] ?? profiles[0];

//         const newProfile: any = {
//             ...profileLocal,
//             ...override
//         };
//         localStorage.setItem('appProfile', JSON.stringify(newProfile));
//         setSavingProfile(newProfile);
//     };

//     const { themeCode } = savingProfile;
//     // Override Mui Style
//     const overrideMuiStyle = { components: standardTheme.overrideStyleFn(standardTheme.theme.palette) };
//     const theme = {
//         ...standardTheme,
//         theme: { ...standardTheme.theme, ...getThemes()?.[themeCode], ...overrideMuiStyle }
//     };

//     // Change the favicon dynamically
//     if (theme) {
//         const favIcon: any = document.getElementById('favicon');
//         if (favIcon) {
//             favIcon.href = getThemes()?.[themeCode].logoIconUrl;
//         }
//     }
//     const muiTheme = createTheme(theme.theme);
//     const contextValue: any = {
//         themeCode,
//         currentTheme: theme,
//         profileCode: savingProfile.profileCode,
//         currentProfile: profiles[savingProfile.profileCode],
//         updateProfile
//     };

//     return (
//         <ProfileContext.Provider value={contextValue}>
//             <StyledEngineProvider injectFirst>
//                 <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
//             </StyledEngineProvider>
//         </ProfileContext.Provider>
//     );
// };

// export default ProfileProvider;
