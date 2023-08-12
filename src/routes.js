import { Router } from "express";
import fs from "fs";
import csvParser from "csv-parser";
import multer from "multer";

import {
  formatCPFOrCNPJ,
  formatCurrency,
  formatDate,
  validCPFOrCNPJ,
} from "./utils";

const routes = Router();

const upload = multer({ dest: "uploads/" });

routes.post("/upload-csv", upload.single("csv"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "File not found" });
  }

  const extractedList = [];
  const validatedList = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (data) => extractedList.push(data))
    .on("end", () => {
      for (const item of extractedList) {
        const vlPrestaExpected = item.vlTotal / item.qtPrestacoes;
        const vlPrestaIsCorrectFlag =
          formatCurrency(vlPrestaExpected) === item.vlPresta;

        validatedList.push({
          ...item,
          vlTotal: formatCurrency(item.vlTotal),
          vlPresta: formatCurrency(item.vlPresta),
          vlPrestaIsCorrectFlag,
          vlPrestaRealCorrectFlag: formatCurrency(vlPrestaExpected),
          vlMora: formatCurrency(item.vlMora),
          vlMulta: formatCurrency(item.vlMulta),
          vlOutAcr: formatCurrency(item.vlOutAcr),
          vlIof: formatCurrency(item.vlIof),
          vlDescon: formatCurrency(item.vlDescon),
          vlAtual: formatCurrency(item.vlAtual),
          dtContrato: formatDate(item.dtContrato),
          dtVctPre: formatDate(item.dtVctPre),
          nrCpfCnpjFormatedFlag: formatCPFOrCNPJ(item.nrCpfCnpj),
          nrCpfCnpjIsValidFlag: validCPFOrCNPJ(item.nrCpfCnpj),
        });
      }

      res.status(200).send({ message: "OK", validatedList });
    });
});

export default routes;
