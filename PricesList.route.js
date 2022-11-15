import {Router} from 'express';
import * as prodServController from '../controllers/prodserv.controller';
import * as PricesListController from '../controllers/PricesList.controller';
const router = Router();

router.delete('/:id', PricesListController.deletePricesItem);

