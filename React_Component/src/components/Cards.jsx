const Cards = ({ role, company, salary, logo }) => {
  return (
    <div className='card'>
      <div className='top'>
        <h2>${salary.toLocaleString()}</h2>
        <button>Save</button>
      </div>

      <div className='centre'>
        <h1>{role}</h1>
      </div>

      <div className='bottom'>
        <img src={logo} alt={company} />
        <h2>{company}</h2>
        <button>View</button>
      </div>
    </div>
  );
};

export default Cards;
