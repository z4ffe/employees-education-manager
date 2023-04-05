declare namespace NodeJS {
   interface ProcessEnv {
      NODE_ENV: string;
      PORT: string
      DB_PORT: string
      DB_USER: string
      DB_PW: string
      DB_HOST: string
      DB_NAME: string
   }
}
