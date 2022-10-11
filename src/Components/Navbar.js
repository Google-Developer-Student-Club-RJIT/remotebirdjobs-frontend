import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const Navbar = (props) => {
    let { form, handleForm } = props;
    const topics =['Android','C','CSS','Clojure','Cofeescript','Cpp','Crystal','Django','Elixir','Go','Java','JavaScript','Julia','Kotlin','Linux','MERN','NodeJS','PHP','Powershell','Python','ReactJS','Roslyn','Ruby','Rust','Scala','Spring','Swift','TypeScript']
    const [value, setValue] = React.useState('ReactJS');
    return (
        <header className="navbar navbar-dark p-3 px-4 navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand fs-3" href="/">Remote Bird Jobs</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex">
                        <div className="form-group mx-3 row">
                            <Autocomplete
                            name='topic'
                            value={value}
                             onChange={(event, newValue) => {
                             setValue(newValue);
                             form.topic=newValue;
                             handleForm(event);
                             }}
                            disableClearable
                            id="Topic"
                            options={topics}
                            sx={{ width: 300 , bgcolor: 'white', padding: '0px', borderRadius: '5px' }}
                            renderInput={(params) => <TextField {...params} label="Topic" />}
                            />
                        </div>
                        <div className="form-group mx-3 row">
                            <label htmlFor="type" className='w-auto text-white col-auto my-auto'>Work From Home</label>
                            <select id="type" className="w-auto form-control col-auto my-auto"
                                name='type'
                                value={form.type}
                                onChange={handleForm}>
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>
                        <div className="form-group mx-3 row">
                            <label className='w-auto text-white col-auto my-auto' htmlFor="Start">Start Date </label>
                            <input type="date" id="Start" className="w-auto form-control col-auto my-auto"
                                name='startDate'
                                value={form.startDate}
                                onChange={handleForm} />
                        </div>
                        <div className="form-group mx-3 row">
                            <label className='w-auto text-white col-auto my-auto' htmlFor="End">End Date</label>
                            <input type="date" id="End" className="w-auto form-control col-auto my-auto"
                                name='endDate'
                                value={form.endDate}
                                onChange={handleForm} />
                        </div>
                        {/* <div className="form-group mx-3 my-auto row">
                            <input className="form-check-input w-auto form-control col-auto my-auto " id="checkbox" type="checkbox"
                            name='type'
                            onChange={handleForm} onClick={checked}/>
                            <label className="form-check-label w-auto text-white col-auto my-auto" htmlFor="checkbox">
                                WFH
                            </label>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
