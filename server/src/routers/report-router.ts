import {
  getWebsiteReport,
  getWebsiteReportsByDateFilter,
} from './../controllers/report-controllers';
import * as express from 'express';

const router = express.Router();

router.get('/report/get/:fromDate/:toDate', getWebsiteReportsByDateFilter);
router.get('/report/get/allData', getWebsiteReport);

export { router };
