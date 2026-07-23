import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:8000',
    withCredentials : true
});

export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {
  const formData = new FormData();

  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", selfDescription);
  
  // Safe check: Agar file select hui hai tabhi append karein
  if (resumeFile) {
    formData.append("resume", resumeFile);
  }

  // 💡 response ko const rakhin aur direct return karein
  const res = await api.post("/api/interview", formData);

  return res.data; 
};

export const getInterviewReportById = async (interviewID) => {
  const response = await api.get(`/api/interview/report/${interviewID}`);
  return response.data;
};

export const getAllInterviewReports = async () => {
  const response = await api.get('/api/interview/report');
  return response.data;
};
