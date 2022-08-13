module.exports = (ctx) => {
  return {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano: ctx.env === "production" ? {} : false,
    },
  };
}
