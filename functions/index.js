import functions from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import { getAllAlbums, createNewAlbum } from './src/albums.js';
 
const app = express();
app.use(express.json());
app.use(cors());
 
app.get('/albums', getAllAlbums);
app.post('/albums', createNewAlbum);
 
export const api = functions.https.onRequest(app);
