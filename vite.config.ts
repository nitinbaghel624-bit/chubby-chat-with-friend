export default defineConfig(() => {
  return {
    base: '/chubby-chat-with-friends/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
