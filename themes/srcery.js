// Taken from https://github.com/srcery-colors/srcery-web/blob/master/palette/srcery_javascript.js (palette v2)
// Corrected slightly:
//   Second xgray5 -> xgray6
//   borange -> brightorange
let colors = {
  black: "#121110",
  blue: "#2C78BF",
  cyan: "#0AAEB3",
  green: "#519F50",
  magenta: "#E02C6D",
  orange: "#FF5F00",
  red: "#EF2F27",
  white: "#C5B088",
  yellow: "#FBB829",

  brightblack: "#917E6B",
  brightblue: "#68A8E4",
  brightcyan: "#2BE4D0",
  brightgreen: "#98BC37",
  brightmagenta: "#FF5C8F",
  brightorange: "#FF8700",
  brightred: "#F75341",
  brightwhite: "#FCE8C3",
  brightyellow: "#FED06E",

  hard_black: "#0E0D0C",
  xgray1: "#1C1B19",
  xgray2: "#262522",
  xgray3: "#312F2C",
  xgray4: "#3B3935",
  xgray5: "#45433E",
  xgray6: "#504D47",
};

module.exports = {
  name: "srcery",
  displayName: "Srcery",
  theme: {
    background: {
      default: colors.black,  // Primary
      success: colors.green,  // POST, 200 OK, parameter names
      notice: colors.yellow,  // PATCH
      warning: colors.orange, // PUT
      danger: colors.red,     // DELETE
      surprise: colors.blue,  // Dashboard link, GET, SEND button, branch button, add plugin button
      info: colors.xgray4,    // OPTIONS, HEAD
    },
    foreground: {
      default: colors.white,        // Primary
      success: colors.white,  // Secondary font color
      notice: colors.white,  // Secondary font color
      warning: colors.white, // Secondary font color
      danger: colors.white,     // Secondary font color
      surprise: colors.white, // Secondary font color
      info: colors.white,          // Secondary font color for info background
    },
    highlight: {
      default: colors.white,        // Sidebar highlight color
    },

    // The styles object targets sub-components of the Insomnia application.
    styles: {
      sidebar: {
        background: {
          default: colors.hard_black,
        },
      },
      dialog: {
        background: {
          default: colors.hard_black,
        },
      },
      // TODO this isn't working. I'd like the send button to not be blue.
      editor: {
        background: {
          surprise: colors.brightyellow,
        },
      },
      transparentOverlay: {
        background: {
          default: `${colors.hard_black}80`
        },
      },
    },
  },
};
