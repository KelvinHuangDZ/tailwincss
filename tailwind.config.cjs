/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/modules/**/*.{html,js}',],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'mq-color-white': 'var(--mq-color-white)',

      // Grey color variations
      'mq-color-grey110': 'var(--mq-color-grey110)',
      'mq-color-grey100': 'var(--mq-color-grey100)',
      'mq-color-grey90': 'var(--mq-color-grey90)',
      'mq-color-grey80': 'var(--mq-color-grey80)',
      'mq-color-grey70': 'var(--mq-color-grey70)',
      'mq-color-grey60': 'var(--mq-color-grey60)',
      'mq-color-grey50': 'var(--mq-color-grey50)',
      'mq-color-grey40': 'var(--mq-color-grey40)',
      'mq-color-grey30': 'var(--mq-color-grey30)',
      'mq-color-grey20': 'var(--mq-color-grey20)',
      'mq-color-grey10': 'var(--mq-color-grey10)',

      // Red color variations
      'mq-color-red10': 'var(--mq-color-red10)',
      'mq-color-red30': 'var(--mq-color-red30)',
      'mq-color-red50': 'var(--mq-color-red50)',
      'mq-color-red70': 'var(--mq-color-red70)',
      'mq-color-red100': 'var(--mq-color-red100)',
      'mq-color-red110': 'var(--mq-color-red110)',

      // Green color variations
      'mq-color-green10': 'var(--mq-color-green10)',
      'mq-color-green30': 'var(--mq-color-green30)',
      'mq-color-green50': 'var(--mq-color-green50)',
      'mq-color-green70': 'var(--mq-color-green70)',
      'mq-color-green100': 'var(--mq-color-green100)',
      'mq-color-green110': 'var(--mq-color-green110)',

      // Orange color variations
      'mq-color-orange10': 'var(--mq-color-orange10)',
      'mq-color-orange30': 'var(--mq-color-orange30)',
      'mq-color-orange50': 'var(--mq-color-orange50)',
      'mq-color-orange70': 'var(--mq-color-orange70)',
      'mq-color-orange100': 'var(--mq-color-orange100)',
      'mq-color-orange110': 'var(--mq-color-orange110)',

      // Blue color variations
      'mq-color-blue10': 'var(--mq-color-blue10)',
      'mq-color-blue30': 'var(--mq-color-blue30)',
      'mq-color-blue50': 'var(--mq-color-blue50)',
      'mq-color-blue70': 'var(--mq-color-blue70)',
      'mq-color-blue100': 'var(--mq-color-blue100)',
      'mq-color-blue110': 'var(--mq-color-blue110)',
      
      // Gold color variations
      'mq-color-gold10': 'var(--mq-color-gold10)',
      'mq-color-gold30': 'var(--mq-color-gold30)',
      'mq-color-gold50': 'var(--mq-color-gold50)',
      'mq-color-gold70': 'var(--mq-color-gold70)',
      'mq-color-gold100': 'var(--mq-color-gold100)',
      'mq-color-gold110': 'var(--mq-color-gold110)',
    },
    fontFamily: {
      'helvetica': ["HelveticaNeue", 'Helvetica', 'Arial', 'sans-serif'],
      'helvetica-lt': ["HelveticaNeue-Light", 'Helvetica', 'Arial'],
      'helvetica-md': ["Helvetica Neue Medium", 'Helvetica', 'Arial'],
      /*'display': ['helvetica', ...],
      'body': ['helvetica', ...],*/
    },
    extend: {
      spacing: {
        'mq-space-narrow': '4px',
        'mq-space-base': '8px',
        'mq-space-xsmall': '12px',
        'mq-space-small': '16px',
        'mq-space-medium': '24px',
        'mq-space-large': '32px',
      }
    }
  },
  plugins: []
}
