let plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
    
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`
const lh = (fontSize, lineHeight) => `${round(lineHeight / fontSize)}`

module.exports = {
  content: [
    'layouts/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'content/**/*.htm',
    'partials/**/*.{htm,js}',
    'src/**/*.js',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        'container': 'var(--padding-x)',
        'video': '56.25%',
      },
      colors: {
        'clr-header': 'rgb(var(--clrHeader) / 1)',
        'clr-body': 'rgb(var(--clrBody) / 1)',
        'clr-footer': 'rgb(var(--clrFooter) / 1)',
        'clr-heading': 'rgb(var(--clrHeading) / 1)',
        'clr-text': 'rgb(var(--clrText) / 1)',
        'clr-link': 'rgb(var(--clrLink) / 1)',
        'clr-cta': 'rgb(var(--clrCta) / 1)',
        'clr-selection': 'rgb(var(--clrSelection) / 1)',
        'clr-hover': 'rgb(var(--clrHover) / 1)',
        'clr-overlay': 'rgb(var(--clrOverlay) / 1)',
      },
      boxShadow: {
        'inside': 'inset 0px 0px 50px 0px rgba(0,0,0,0);',
        'autofill': '0 0 0px 1000px #ffffff inset',
      },
      // typography: theme => ({
      //   DEFAULT: {
			// 		css: {
      //       'h1, h2, h3, h4': {
      //         fontFamily: theme('fontFamily.nunito'),
      //         fontWeight: theme('fontWeight.semibold'),
      //         color: theme('colors.clr-heading'),
      //       },
      //       h1: {
      //         marginBottom: theme('spacing.5'),
      //         '@screen xs': {
      //           fontSize: rem(58),
      //         },
      //         '@screen md': {
      //           fontSize: rem(64),
      //         },
      //         '@screen lg': {
      //           fontSize: rem(72),
      //         },
      //         '@screen xl': {
      //           fontSize: rem(80),
      //         },
      //         '@screen 2xl': {
      //           fontSize: rem(96),
      //         },
      //       },
      //       h2: {
      //         marginBottom: theme('spacing.4'),
      //         '@screen xs': {
      //           fontSize: rem(48),
      //         },
      //       },
      //       h3: {
      //         marginBottom: theme('spacing.3'),
      //         '@screen xs': {
      //           fontSize: rem(30),
      //         },
      //       },
      //       h4: {
      //         marginBottom: theme('spacing.2'),
      //         '@screen xs': {
      //           fontSize: rem(24),
      //         },
      //       },
      //       span: {
      //         fontFamily: theme('fontFamily.nunito'), 
      //         fontWeight: theme('fontWeight.normal'),
      //         fontSize: rem(16),
      //         lineHeight: theme('lineHeight.normal'),
      //         color: theme('colors.gray[500]'),
      //         marginBottom: theme('spacing.6'),
      //       },
      //       p: {
      //         fontFamily: theme('fontFamily.nunito'), 
      //         fontWeight: theme('fontWeight.light'),
      //         fontSize: rem(18),
      //         lineHeight: theme('lineHeight.normal'),
      //         color: theme('colors.clr-text'),
      //         marginTop: theme('spacing.3'),
      //         marginBottom: theme('spacing.2'),
      //       },
      //       a: {
      //         fontFamily: theme('fontFamily.nunito'), 
      //         fontWeight: theme('fontWeight.bold'),
      //         fontSize: rem(16),
      //         color: theme('colors.clr-link'),
      //         textDecoration: 'underline',
      //         textDecorationColor: theme('colors.clr-cta'),
      //         textUnderlineOffset: '4px',
      //         transition: 'all .3s ease-in-out',
      //         '&:hover': {
      //           color: theme('colors.clr-cta'),
      //         },
      //         '&.btn': {
      //           fontFamily: theme('fontFamily.nunito'),
      //           fontSize: remPlug(20),
      //           color: theme('colors.white'),
      //           backgroundColor: theme('colors.clr-cta'),
      //           borderRadius: theme('borderRadius.md'),
      //           paddingTop: theme('spacing.2'),
      //           paddingBottom: theme('spacing.2'),
      //           paddingLeft: theme('spacing.6'),
      //           paddingRight: theme('spacing.6'),
      //           // marginLeft: theme('spacing.4'),
      //           // marginRight: theme('spacing.4'),
      //           transitionProperty: theme('transitionProperty.all'),
      //           transitionDuration: theme('transitionDuration.300'),
      //           transitionTimingFunction: theme('transitionTimingFunction.ease-in'),
      //           textTransform: 'uppercase',
      //           '&--flare': {
      //             display: 'inline-flex',
      //             position: 'relative',
      //             overflow: 'hidden', 
      //             '&:before': {
      //               content: '""',
      //               position: 'absolute',
      //               top: '0',
      //               height: '100%',
      //               width: '45px',
      //               transform: 'skewX(-45deg)',
      //               left: '-150%',
      //               background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4))',
      //               animation: theme('animation.flare'),
      //             },
      //           },
      //           '&:hover': {
      //             scale: '1.05',
      //           },
      //         }
      //       },
      //       hr: {
      //         borderColor: theme('colors.clr-cta / 80'),
      //         borderTopWidth: 2,
      //         marginTop: theme('spacing.3'),
      //         marginBottom: theme('spacing.3'),
      //       },
      //       blockquote: {
      //         border: 0,
      //         'p': {
      //           fontFamily: theme('fontFamily.nunito'), 
      //           fontWeight: theme('fontWeight.semibold'),
      //           fontStyle: 'normal',
      //           // fontSize: em(16, 16),
      //           color: theme('colors.clr-heading'),
      //         },
      //         'img': {
      //           display: 'inline-block',
      //           width: rem(80),
      //           height: rem(80),
      //           borderRadius: '100%',
      //           marginBottom: rem(20),
      //         }
      //       },
      //       '.cta': {
      //         fontSize: 'inherit',
      //         fontFamily: 'inherit',
      //         color: theme('colors.white'),
      //         backgroundColor: theme('colors.clr-cta'),
      //         paddingTop:  theme('spacing.1'),
      //         paddingBottom: theme('spacing.1'),
      //         paddingLeft: theme('spacing.2'),
      //         paddingRight: theme('spacing.2'),
      //         borderRadius: theme('borderRadius.md'),
      //       },
      //     },
			// 	},
			// })
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    plugin(function ({ addVariant, addComponents, addUtilities, theme }) {   
      addVariant('carousel-inited', '&.carousel--inited');
      addVariant('slide-active', '&.carousel-slide-active');
      addVariant('slide-next', '&.carousel-slide-next');
      addVariant('slide-prev', '&.carousel-slide-prev'); 
      addVariant('show', '&.show');  
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 var(--padding-x)',
          '@screen sm': {
            '--padding-x': 'calc(50vw - calc(50vw - 3.125%))',
          },
          '@screen lg': {
            '--padding-x': 'calc(50vw - calc(50vw - 6.25%))',
          },
          '@screen 2xl': {
            '--padding-x': 'calc(50vw - calc(50vw - 9.375%))',
          },
        },
      });
      addUtilities({
        '.marker-none': {
          '& > summary': {
            listStyle: 'none',
          },
          '& > summary::-webkit-details-marker': {
            display: 'none',
          }
        },
        '.counter-reset': {
          counterReset: 'number',
        },
        '.counter-increment': {
          counterIncrement: 'number',
        },
      });
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
