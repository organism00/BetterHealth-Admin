import React, { useState } from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import axios from 'axios'

const NewDoctor = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [lga, setLga] = useState('');
    const [nationality, setNationality] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [department, setDepartment] = useState('');

    const handleAddDoctor = async (e) => {
        e.preventDefault();
        const doctor = {firstName, lastName, email, address, stateOfOrigin, lga, nationality, maritalStatus, phoneNo, specialty, licenseNumber, yearsOfExperience, joiningDate, department};

        try {
            const res = await axios.post('https://hms-w4kw.onrender.com/api/Doctor/AddDoctor', doctor);
            console.log(res.data);
        } catch (error) {
            console.log(error.response);
        }
    }
  return (
    <>
        <main className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
            <SideBar/>
            <Navbar/>
            <main className="col-start-2 h-full w-full md:w-screen lg:w-full px-7 lg:mt-0 md:mt-0">
                <form className='flex flex-col my-24 ' action='submit' onSubmit={handleAddDoctor}>
                    <div className='w-[100%] mb-10 mt-5 h-auto lg:w-full pt-6  pb-14 md:overflow-x-auto overflow-x-auto  shadow-lg border border-stone-200 rounded-2xl mx-auto px-5'>
                        <h1 className='text-2xl my-6'>Doctor's Information</h1>
                        <div className='lg:grid lg:grid-cols-2  lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2' > 
                            <input type="text" placeholder='First Name' className='border border-stone-500 p-2 rounded-md outline-violet-500' required
                                name='firstName' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder='Last Name' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                                name='lastName' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            <input type="email" placeholder='Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                                name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" placeholder='Residential Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                                name='address' id='address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                            <input type="text" placeholder='State Of Origin' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                                name='stateOfOrigin' id='stateOfOrigin' value={stateOfOrigin} onChange={(e) => setStateOfOrigin(e.target.value)}/>
                            <input type="text" placeholder='LGA' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                                name='lga' id='lga' value={lga} onChange={(e) => setLga(e.target.value)}/>
                            <input type="text" placeholder='Nationality' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' 
                                name='nationality' id='nationality' value={nationality} onChange={(e) => setNationality(e.target.value)}/>
                            <input type="text" placeholder='Marital Status' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                                name='maritalStatus' id='maritalStatus' value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}/>
                            <input type="text" placeholder='Phone No' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                                name='phoneNo' id='phoneNo' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/>
                            <input type="text" placeholder='Specialization' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' 
                                name='speciality'  value={specialty} onChange={(e) => setSpecialty(e.target.value)}/>
                            <input type="text" placeholder='License Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' 
                                name='licenseNumber' id='licenseNumber' value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)}/>
                            <input type="number" placeholder='Years of experience' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' 
                                name='yearsOfExperience' id='yearsOfExperience' value={yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)}/>
                            <input type="date" title='Joining Date'  className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' 
                                name='joiningDate' id='joiningDate' value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)}/>
                            <input type="text" placeholder='Department' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' 
                                name='department' id='department' value={department} onChange={(e) => setDepartment(e.target.value)}/>
                            <button className='bg-violet-500 w-60 lg:w-1/4 p-3 hover:bg-violet-600 text-white rounded-md place-self-end text-xl col-span-2' type='submit'> Submit</button> 
                        </div>
                    </div> 
                </form>
            </main>
        </main>
    </>
  )
}
export default NewDoctor