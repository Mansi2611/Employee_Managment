import React, { useEffect ,useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import {toast } from 'react-toastify';
import { toast } from "react-hot-toast"


import {  useParams } from "react-router-dom";


const EditEmployeeForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {id} = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    department: "",
    role: "",
  });
  
  // console.log("id here in editempform: ",id);


  const getDataUser = async () => {

    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/editUser/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setFormData({
        name: res.name,
        email: res.email,
        title: res.title,
        department: res.department,
      });
      // setEmpData(res);
      console.log("res getpeople : ",res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataUser();
  },[]);
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the form data state when input values change
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const onSubmit = async (data) =>{
    try {
      console.log("inside update of on submit");


       const response = await fetch(`${process.env.REACT_APP_BASE_URL}/updateUser/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      
    console.log("User data updated successfully:", response.status);
      
    const responseData = await response.json();
    console.log("Response from server:", responseData);
    // toast.success('User Updated successfully', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   closeOnClick: true,
    //   draggable: true,
    //   theme: "dark",
    //   });

    toast.success("Update sucessfull")

      navigate("/");
        } catch (error) {
      console.error("Error updating user data:", error);
  
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name"
         className="mt-5 text-base font-medium text-gray-600 dark:text-gray-200"
        >Employee Name</label>
        <input
           className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed  bg-slate-50 disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 mt-2  mb-4"
          type="text"
          id="name"
          name="name"
        value={formData.name}
          {...register("name")}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email"
         className="text-base font-medium text-gray-600 dark:text-gray-200"

        >Employee Email</label>
        <input
           className="flex h-10 text-white  w-full rounded-md border  bg-slate-50 border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 mt-2 mb-4"
          type="email"
          id="email"
          name="email"
          // ref={register}
          {...register("email")}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="title"
          className="text-base  font-medium text-gray-600 dark:text-gray-200"

        >Employee Title</label>
        <input
         className="flex  text-white  h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900  bg-slate-50 mt-2 mb-4"
          type="text"
          id="title"
          name="title"
          // ref={register}
          {...register("title")}
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="department"
         className="text-base  font-medium text-gray-600 dark:text-gray-200 "

        >Employee Department</label>
        <input
        className="flex text-white  h-10 w-full  bg-slate-50 rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 mt-2"
          type="text"
          id="department"
          name="department"
          {...register("department")}
          value={formData.department}
          onChange={handleInputChange}
        />
      </div>
      
      

      <button className="inline-flex w-full mt-6 items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            type="submit">Save Changes</button>


                         

    </form>
  );
};

export default EditEmployeeForm;


























