module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
          @import "@/scss/mini-reset.scss";
          @import "@/scss/_variables.scss";
          @import "@/scss/tag.scss";
          @import "@/scss/class.scss";
          `
        }
      }
    }
  };