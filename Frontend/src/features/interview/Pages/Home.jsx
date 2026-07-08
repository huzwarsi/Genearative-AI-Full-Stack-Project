import React from 'react'
import '../styles/style.scss'

const Home = () => {
    return (
        <div className="page-wrapper">
            {/* Main Header Section */}
            <header className="hero-header">
                <h1>Create Your Custom <span>Interview Plan</span></h1>
                <p>Let our AI analyze the job requirements and your unique profile to build a winning strategy.</p>
            </header>

            <main className='home'>
                {/* Left Section: Target Job Description */}
                <div className="left">
                    <div className="section-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                        Target Job Description
                    </div>
                    <textarea 
                        name="jobDescription" 
                        id="jobDescription" 
                        placeholder="Paste the full job description here...&#10;e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large scale system design.'"
                    ></textarea>
                </div>

                {/* Right Section: Profile & Uploads */}
                <div className="right">
                    <div className="section-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Your Profile
                    </div>

                    <div className="input-group">
                        <label htmlFor="resume">Upload Resume</label>
                        <div className="file-drop-zone">
                            <input type="file" name="resume" id="resume" accept=".pdf" />
                            <div className="drop-zone-content">
                                <div className="upload-icon-wrapper">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                                </div>
                                <p className="main-text">Click to upload or drag & drop</p>
                                <p className="sub-text">PDF or DOCX (Max 10MB)</p>
                            </div>
                        </div>
                    </div>

                    <div className="or-divider">OR</div>

                    <div className="input-group">
                        <label htmlFor="selfDescription">Quick Self-Description</label>
                        <textarea 
                            name="selfDescription" 
                            id="selfDescription" 
                            placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                        ></textarea>
                    </div>

                    {/* Bottom Info Banner - Layout Fixed */}
                    <div className="info-banner">
                        <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        <p className="info-text">
                            Either a <strong>Resume</strong> or a <strong>Self-Description</strong> is required to generate a personalized plan.
                        </p>
                    </div>

                    <button className='generate-btn'>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 22 12 17 22 22 12 2"/></svg>
                        Generate My Interview Strategy
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Home
