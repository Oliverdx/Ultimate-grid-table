const Home = ({ data }) => {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {data.map(item => <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>{item.product}</span>
          <span>{item.quantity}</span>
          <span>{item.price}</span>
          <span>{item.type}</span>
          <span>{item.industry}</span>
          <span>{item.origin}</span>
        </div>)}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/getData');
  const dataSource = await res.json();
  const data = dataSource.slice(0, 1000);

  return { props: { data } }
}

export default Home;