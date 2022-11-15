import * as PricesListService from "../services/PricesList.service";
import boom from "@hapi/boom";
export const deletePricesItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedPricesItem = await PricesListService.deletePricesItem(id);
		if (!deletedPricesItem) {
			throw boom.notFound(`No se encontró la Orden con Id: ${req.params.id}.`);
		} else if (deletedPricesItem) {
			res.status(200).json(deletedPricesItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};