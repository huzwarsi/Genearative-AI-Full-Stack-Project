import { useContext } from "react";
import { interviewContext } from "../interviewContext";
import {
  generateInterviewReport,
  getInterviewReportById,
  getAllInterviewReports,
} from "../services/interview.api";

export const useInterview = () => {
  const context = useContext(interviewContext);

  if (!context) {
    throw new Error(
      "useInterview must be used within an InterviewProvider"
    );
  }

  const { 
    loading, 
    setLoading, 
    report, 
    setReport, 
    reports, 
    setReports 
  } = context;

  // Generate Interview
  const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
    setLoading(true);
    let finalData = null; // Variable ka naam badla taaki scope conflict na ho
    try {
      const response = await generateInterviewReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      setReport(response.interviewReport);
      finalData = response.interviewReport; // Data ko yahan save kiya
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    return finalData; // Ab Home component ko sahi data return hoga
  };

  // Get Single Interview Report
  const getReportById = async (interviewID) => {
    setLoading(true);
    let finalData = null;
    try {
      const response = await getInterviewReportById(interviewID);
      setReport(response.interviewReportById); // Backend par key 'interviewReportById' hai
      finalData = response.interviewReportById;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    return finalData;
  };

  // Get All Interview Reports
  const getReports = async () => {
    setLoading(true);
    let finalData = null;
    try {
      const response = await getAllInterviewReports();
      setReports(response.Report); // Backend par key 'Report' hai
      finalData = response.Report;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    return finalData;
  };

  return {
    loading,
    report,
    reports,
    generateReport,
    getReportById,
    getReports,
  };
};
