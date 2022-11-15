import PricesList from  '../models/PricesList.model';
import boom from '@hapi/boom';
 
export const deletePricesItem = async (id) => {
	try {
		return await PricesList.findOneAndDelete({ IdListaOK: id });
	} catch (error) {
		throw boom.badImplementation(error);
	}
};