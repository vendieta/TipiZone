export enum Colors {
    primary = '#f7ca49',
    primary_light = '#ffe141',
    secondary = '#0d8320',
    text = '#363636',
    disabled = '#9197a6',
    border = "#d0d4dc",
    backgroundSecondary = '#f5f6fb'
}

export enum Fonts {
    Regular = 'Okra-Regular',
    Medium = 'Okra-Medium',
    Light = 'Okra-MediumLight',
    SemiBold = 'Okra-Bold',
    Bold = 'Okra-ExtraBold',
}

export const lightColors = [
    'rgba(255,255,255,1)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,0.7)',
    'rgba(255,255,255,0.6)',
    'rgba(255,255,255,0.5)',
    'rgba(255,255,255,0.4)',
    'rgba(255,255,255,0.003)',
];

export const darkWeatherColors = [
    '#36435CFF', // rgba(54, 67, 92, 1) → 100% opaco
    '#36435CE6', // rgba(54, 67, 92, 0.9) → 90% opaco (0.9*255 ≈ 230 → E6)
    '#36435CCC', // rgba(54, 67, 92, 0.8) → 80% opaco (0.8*255 ≈ 204 → CC)
    '#36435C33', // rgba(54, 67, 92, 0.2) → 20% opaco (0.2*255 ≈ 51 → 33)
    '#36435C00'  // rgba(54, 67, 92, 0.0) → 0% opaco (transparente)
] as const;
