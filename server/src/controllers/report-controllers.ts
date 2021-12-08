import { WebReport } from './../models/website-report-model';
import { websiteReports } from '..';


const getReportByDate: (fromDate: number, toDate: number) => WebReport[] = (fromDate, toDate) => websiteReports.filter(websiteReport  => {
    const websiteTimeStamp = new Date(websiteReport.date).getTime();
    return fromDate <= websiteTimeStamp && websiteTimeStamp <= toDate;
});


export const getWebsiteReport = (_,res) => {
    res.json(websiteReports);
};


export const getWebsiteReportsByDateFilter = (req,res) => {
    const {fromDate, toDate} = req.params;
    if(fromDate && toDate) {
        const reportFilterByDate = getReportByDate(fromDate, toDate);
        res.json(reportFilterByDate);
    } else {
        res.status(400).res();
    }
};