import React, { useState } from 'react';
import useFetchJobs from './utils/useFetchjobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job'
import JobsPagination from './components/JobsPagination';
import SearchForm from './components/SearchForm';
import Loading from "./components/Loading"
import './App.css'

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <h3 className="mb-5 text-muted font-weight-light">
        Discover the latest entries from GitHub-Jobs
        </h3>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <Loading />}
      {error && <h1 className="error">Error. Try Refreshing.</h1>}
      {
        !loading &&
        !error &&
        jobs.map(job => { return <Job key={job.id} job={job} /> })

      }
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
