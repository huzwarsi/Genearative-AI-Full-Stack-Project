import { useContext } from "react";
import { InterviewContext } from "../interview.context";
import {
  generateInterviewReport,
  getInterviewReportById,
  getAllInterviewReports,
} from "../services/interview.api";

export const useInterview = () => {
  const context = useContext(InterviewContext);

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
    setReports,
  } = context;

  // Generate Interview
  const generateReport = async ({
    jobDescription,
    selfDescription,
    resumeFile,
  }) => {
    setLoading(true);

    try {
      const response = await generateInterviewReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });

      setReport(response.interviewReport); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Get Single Interview Report
  const getReportById = async (interviewID) => {
    setLoading(true);

    try {
      const response = await getInterviewReportById(interviewID);
      setReport(response.interviewReport);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Get All Interview Reports
  const getReports = async () => {
    setLoading(true);

    try {
      const response = await getAllInterviewReports();
      setReports(response.interviewReports);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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