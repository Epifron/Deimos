import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../../credentials.json";

const doc = new GoogleSpreadsheet(
  "1dlfvFydD-m4SCB5IOMCeXE_V6QOC-vcOO9dlULwUMWA"
);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const data = JSON.parse(req.body);

    // Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom: "diadospais",
      Promo: "10%",
    });
    res.end(req.body);
  } catch (err) {
    console.log(err);
    res.end("error");
  }
};
