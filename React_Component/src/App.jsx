import Cards from './components/cards'

const App = () => {

  const faangJobs = [
  {
    company: "Meta",
    role: "Machine Learning Engineer",
    salary_usd: 300000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg"
  },
  {
    company: "Apple",
    role: "iOS Engineer",
    salary_usd: 230000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    company: "Amazon",
    role: "Cloud Engineer (AWS)",
    salary_usd: 250000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    company: "Netflix",
    role: "Platform Engineer",
    salary_usd: 320000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    company: "Google",
    role: "Site Reliability Engineer (SRE)",
    salary_usd: 280000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    company: "Microsoft",
    role: "Cloud Solutions Architect",
    salary_usd: 260000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    company: "Tesla",
    role: "Autonomous Driving Engineer",
    salary_usd: 270000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
  },
  {
    company: "NVIDIA",
    role: "GPU Software Engineer",
    salary_usd: 290000,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  }
];


  return (
    <div className='cards-container'>
        {faangJobs.map((job, idx) => (
        <Cards key={idx} role={job.role} company={job.company} salary={job.salary_usd} logo={job.logo} />
      ))}
    </div>
  )
}

export default App