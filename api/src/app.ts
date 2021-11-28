import express from 'express';
import { config } from "dotenv";
import bodyParser from 'body-parser';
import path from 'path';
import { app } from './appRoutes';
config();

const PORT = process.env.PORT || 8080;

async function main(): Promise<void> {
  app.listen(PORT, () => {
    console.log(`server is in ${process.env.NODE_ENV} mode`);
    console.log(`Server is running on port: ${PORT}`);
  });
}

main()