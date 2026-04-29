const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Beijing AQI Analysis",
    description: "Advanced environmental monitoring Tableau dashboard providing comprehensive insights into Beijing Air Quality Index (AQI) trends, solutions, and regional comparisons.",
    image: `${base}tableau.png`,
    tags: ["tableau", "dashboard", "data-viz", "environment"],
    github: "#",
    live: "https://public.tableau.com/app/profile/milind.bansal5979/viz/DVA2-Capstone/RiskSeverityOverview?publish=yes"
  },
  {
    name: "AI at Work: Efficiency vs Stability",
    description: "Comprehensive data dashboard analyzing the impact of AI adoption on productivity, burnout risk, and long-term workforce sustainability across different roles.",
    image: `${base}project3.png`,
    tags: ["dashboard", "data-viz", "analytics"],
    github: "#",
    live: "https://docs.google.com/spreadsheets/d/1_REKBw5KG179siHzYb7lHJGNnMKlBQmcrzcNTNOrUrg/edit?usp=sharing"
  },
  {
    name: "Valuation Ratio Analysis",
    description: "Financial modeling and valuation ratio analysis for BEL and HAL, including Earnings Per Share, Price to Earnings, and Price to Sales ratios.",
    image: `${base}project1.png`,
    tags: ["excel", "finance", "data-analysis"],
    github: "#",
    live: "https://rishihoodeduin-my.sharepoint.com/:x:/g/personal/ash_2024_rishihood_edu_in/IQBbGoQPq5u0SLtJhKmqlhSQAcHgr4ppBbgscZXhsJnJb5o?e=wZgwOu"
  },
  {
    name: "DuPont Analysis",
    description: "3-Stage and 5-Stage DuPont Analysis dashboard detailing Return on Asset (ROA) and Return on Equity (ROE) metrics for major corporations.",
    image: `${base}project2.png`,
    tags: ["excel", "finance", "dashboard"],
    github: "#",
    live: "https://rishihoodeduin-my.sharepoint.com/:x:/g/personal/ash_2024_rishihood_edu_in/IQAL6yxnUDqJQYb0YDBQXqfWAWRR0ethlFhi_n2mPbYjHZw?e=gOOFzF"
  }
]

export default projects
