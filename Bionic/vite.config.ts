import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_PROD_API_URL': JSON.stringify(env.REACT_APP_PROD_API_URL),
      'process.env.REACT_APP_DEV_API_URL': JSON.stringify(env.REACT_APP_DEV_API_URL)
    },
    plugins: [react()],
  }
})