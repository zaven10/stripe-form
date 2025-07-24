export default {
  define: {
    'process.env.DEBUG': false,
  },
  server: {
    fs: {
      allow: ['/'],
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
}
