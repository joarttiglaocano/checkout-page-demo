import { Router } from 'express';
import * as InvoiceController from '../controllers';

const router = Router();

router.post('/invoice', InvoiceController.invoice);

export default router;
