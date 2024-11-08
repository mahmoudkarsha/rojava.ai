const size = {
        mobileSmall: '320px', // sm
        mobileMiduim: '375px', // mm
        mobileLarge: '425px', //lm
        tablet: '768px', //tb
        laptopSmall: '1024px', // sl
        laptopLarge: '1440px', // ll
        desktop: '1440px', // ds
};

export const onSmallMobile = '@media screen and (max-width:' + size.mobileSmall + ')';
export const onMidiumMobile = '@media screen and (max-width:' + size.mobileMiduim + ')';
export const onLargeMobile = '@media screen and (max-width:' + size.mobileLarge + ')';
export const onTablet = '@media screen and (max-width:' + size.tablet + ')';
export const onSmallLaptop = '@media screen and (max-width:' + size.laptopSmall + ')';
export const onLargeLaptop = '@media screen and (max-width:' + size.laptopLarge + ')';
export const onDesktop = '@media screen and (min-width:' + size.desktop + ')';
