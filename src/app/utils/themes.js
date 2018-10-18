import { createMuiTheme } from '@material-ui/core/styles'

const palettes = {
  Azure: {
    primary: {
      main: '#0072c6',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF5252',
      contrastText: '#ffffff'
    },
    typography: {
      useNextVariants: true,
      // https://bitsofco.de/the-new-system-font-stack/
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ].join(',')
    }
  }
}

global.__THEME__ = createMuiTheme(palettes['Azure'])

export default class {
  static getThemeNames () {
    return palettes.keys()
  }

  static getTheme () {
    return global.__THEME__
  }

  static hasTheme (name) {
    return name in palettes
  }

  static changeTheme (name, completed) {
    if (!(name in palettes)) {
      completed(Error('Theme ' + name + ' not found.'))
    }

    global.__THEME__ = createMuiTheme(palettes[name])
    completed(null, 'completed')
  }
}
