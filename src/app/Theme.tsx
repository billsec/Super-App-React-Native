export const spacing = {
    zero: 0,
    tiny: 2,
    micro: 4,
    smaller: 8,
    half: 12,
    small: 16,
    medium: 24,
    large: 32,
    larger: 48,
};

export const fontSize = {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
};
export const borderRadius = {
    zero: 0,
    micro: 4,
    small: 8,
    medium: 12,
    large: 16,
    larger: 24,
    largest: 32,
    full: 48,
};

export const fontWeight = {
    thin: "100",
    ultraLight: "200",
    light: "300",
    regular: "400",
    medium: "500",
    semiBold: "600",
    heavy: "800",
    bold: "bold",
    normal: "normal",
};

export const lightPalette = {
    background: '#FFFFFF',
    mainBlue: '#016FAD',
    mainOrange: '#FF9B19',
    mainGreen: '#82C823',
    mainGray: '#20242B',
    mainBackgroundGray: '#404955',
    mainLightGray: '#DCDEE1',
    primaryText: '#000000',
    secondaryText: '#666666',
    revertColorText: '#FFFFFF',
    divider: '#CCCCCC',
    downRed: '#DF1515',
    upGreen: '#368727',
    logoRed: '#B02B28'
}

export const dartPalette = {
    background: '#000000',
    mainBlue: '#016FAD',
    mainOrange: '#FF9B19',
    mainGreen: '#82C823',
    mainGray: '#20242B',
    mainBackgroundGray: '#404955',
    mainLightGray: '#DCDEE1',
    primaryText: '#FFFFFF',
    secondaryText: '#888888',
    divider: '#666666',
    downRed: '#F90000',
    upGreen: '#6ABF4B',
}

export const LightTheme = {
    lightPalette,
    spacing,
    fontSize,
    borderRadius,
    fontWeight,
}

export const DarkTheme = {
    dartPalette,
    spacing,
    fontSize,
    borderRadius,
    fontWeight,
}