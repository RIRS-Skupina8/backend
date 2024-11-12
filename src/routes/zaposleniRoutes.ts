import express from 'express';

import { addZaposleni, deleteZaposleni, getZaposleni } from '../controllers/zaposlenController';

const router = express.Router();

/**
 * @swagger
 * /zaposleni:
 *   get:
 *     summary: Pridobi seznam vseh stro�kov
 *     responses:
 *       200:
 *         description: Uspe�no pridobljen seznam stro�kov
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   naziv:
 *                     type: string
 *                     description: Naziv stro�ka
 *                   znesek:
 *                     type: number
 *                     description: Znesek stro�ka
 */
router.get('/', getZaposleni);

/**
 * @swagger
 * /zaposleni/add:
 *   post:
 *     summary: Dodaj nov stro�ek
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../models/Strosek'
 *     responses:
 *       201:
 *         description: Uspe�no dodan stro�ek
 *       400:
 *         description: Napaka pri dodajanju stro�ka
 */
router.post('/add', addZaposleni);

/**
 * @swagger
 * /zaposleni/delete/{id}:
 *   delete:
 *     summary: Izbri�i stro�ek
 *     description: Izbri�e stro�ek na podlagi podanega ID-ja.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: ID stro�ka, ki ga �elite izbrisati
 *     responses:
 *       200:
 *         description: Stro�ek uspe�no izbrisan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Stro�ek uspe�no izbrisan."
 *       400:
 *         description: Neveljaven ID
 *       404:
 *         description: Stro�ek ni bil najden
 *       500:
 *         description: Napaka na stre�niku
 */
router.delete('/delete/:id', deleteZaposleni);

export = router;