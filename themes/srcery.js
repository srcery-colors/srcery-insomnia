// Taken from https://github.com/srcery-colors/srcery-web/blob/master/palette/srcery_javascript.js
// Corrected slightly:
//   Second xgray5 -> xgray6
//   borange -> brightorange
let colors = {
  black: "#1C1B19",
  blue: "#2C78BF",
  cyan: "#0AAEB3",
  green: "#519F50",
  magenta: "#E02C6D",
  orange: "#D75F00",
  red: "#EF2F27",
  white: "#d0bfa1",
  yellow: "#FBB829",

  brightblack: "#918175",
  brightblue: "#68A8E4",
  brightcyan: "#53FDE9",
  brightgreen: "#98BC37",
  brightmagenta: "#FF5C8F",
  brightorange: "#FF8700",
  brightred: "#F75341",
  brightwhite: "#FCE8C3",
  brightyellow: "#FED06E",

  hard_black: "#121212",
  xgray1: "#262626",
  xgray2: "#303030",
  xgray3: "#3A3A3A",
  xgray4: "#444444",
  xgray5: "#4E4E4E",
  xgray6: "#585858",
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
