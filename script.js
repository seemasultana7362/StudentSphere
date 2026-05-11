document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 5, 20, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 5, 20, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Dashboard Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');

    const tabData = {
        student: `
            <div class="tab-grid">
                <div class="tab-info">
                    <h3>Student Dashboard</h3>
                    <p>A central hub for academic excellence and career growth.</p>
                    <ul>
                        <li>AI Study Planner & Weakness Detection</li>
                        <li>Real-time Attendance & CGPA Overview</li>
                        <li>AI Career Recommendations (e.g., Data Science paths)</li>
                        <li>Pending Assignments & Upcoming Exams</li>
                    </ul>
                </div>
                <div class="tab-visual">
                    <div class="glass-panel mini-dash">
                        <div class="dash-header">Student Overview</div>
                        <div class="dash-body">
                            <div class="stat-row"><span class="label">CGPA</span><span class="val">8.4</span></div>
                            <div class="stat-row"><span class="label">Attendance</span><span class="val text-green">89%</span></div>
                            <div class="ai-recommendation mt-2">
                                <i class="fa-solid fa-lightbulb text-yellow"></i> <strong>AI Suggestion:</strong> Focus on DBMS normal forms to improve upcoming internal scores.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        teacher: `
            <div class="tab-grid">
                <div class="tab-info">
                    <h3>Teacher Dashboard</h3>
                    <p>Powerful tools to simplify administration and boost teaching quality.</p>
                    <ul>
                        <li>Upload marks and attendance instantly</li>
                        <li>Generate AI-assisted assignments & exams</li>
                        <li>Predictive analytics for student outcomes</li>
                        <li>Auto grading capabilities</li>
                    </ul>
                </div>
                <div class="tab-visual">
                    <div class="glass-panel mini-dash">
                        <div class="dash-header">Class 3B Analytics</div>
                        <div class="dash-body">
                            <div class="stat-row"><span class="label">Average Score</span><span class="val">76%</span></div>
                            <div class="stat-row"><span class="label">At Risk Students</span><span class="val text-red">4</span></div>
                            <div class="ai-recommendation mt-2">
                                <i class="fa-solid fa-lightbulb text-yellow"></i> <strong>AI Insight:</strong> 30% of class struggled with "Pointers" assignment. Consider review session.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        admin: `
            <div class="tab-grid">
                <div class="tab-info">
                    <h3>Admin Dashboard</h3>
                    <p>Complete control and predictive insights at an institutional level.</p>
                    <ul>
                        <li>Manage departments and student records</li>
                        <li>Track fees and financial health</li>
                        <li>Predict dropout risks and attendance anomalies</li>
                        <li>Placement readiness reports</li>
                    </ul>
                </div>
                <div class="tab-visual">
                    <div class="glass-panel mini-dash">
                        <div class="dash-header">Institution Health</div>
                        <div class="dash-body">
                            <div class="stat-row"><span class="label">Total Enrollment</span><span class="val">2,845</span></div>
                            <div class="stat-row"><span class="label">Placement Rate</span><span class="val text-green">94%</span></div>
                            <div class="ai-recommendation mt-2">
                                <i class="fa-solid fa-lightbulb text-yellow"></i> <strong>System Alert:</strong> Computer Science department shows 12% drop in attendance this week.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        parent: `
            <div class="tab-grid">
                <div class="tab-info">
                    <h3>Parent Portal</h3>
                    <p>Stay connected with your child's academic journey.</p>
                    <ul>
                        <li>Real-time student attendance monitoring</li>
                        <li>Performance tracking and grade history</li>
                        <li>Secure fee payment and status</li>
                        <li>AI-generated comprehensive progress reports</li>
                    </ul>
                </div>
                <div class="tab-visual">
                    <div class="glass-panel mini-dash">
                        <div class="dash-header">Alex's Progress</div>
                        <div class="dash-body">
                            <div class="stat-row"><span class="label">Term 2 Grade</span><span class="val">A-</span></div>
                            <div class="stat-row"><span class="label">Fee Status</span><span class="val text-green">Cleared</span></div>
                            <div class="ai-recommendation mt-2">
                                <i class="fa-solid fa-lightbulb text-yellow"></i> <strong>AI Note:</strong> Alex is showing strong aptitude in Mathematics. Consider advanced placement next term.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    const studentTabContent = document.getElementById('student');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const tabId = btn.getAttribute('data-tab');
            
            studentTabContent.style.animation = 'none';
            studentTabContent.offsetHeight;
            studentTabContent.innerHTML = tabData[tabId];
            studentTabContent.style.animation = 'fadeIn 0.5s';
        });
    });
});
