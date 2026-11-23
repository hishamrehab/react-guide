import { useForm,type SubmitHandler } from "react-hook-form"

const Form = () => {
 interface FormData {
    name: string;
    email: string;
    password: string;
 }


    const {
        register ,
         handleSubmit , 
        formState: {errors , isSubmitting }
 } = useForm<FormData>();



const onSubmit: SubmitHandler<FormData>  = (data) => {

}


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name" >Name :</label>
            <input
             type="text" 
             id="name" 
            {...register("name" , 
            {required: "Name is required"})}
             />   
        {errors.name && <p style={{
            color: "red"
        }}>{errors.name.message}</p>}


            <div>
                <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // regular expression pattern
                        message: "Invalid email address", 
                    })}
                    id="email"
                    placeholder="Email"
                    />
                {errors.email&&(
                    <div style={{
                        color: "red"
                    }}>
                        {errors.email.message}
                    </div>
                ) }
            </div>

  <div >
    <input type="password"
     {...register("password" , {
        minLenght: {
            value: 8,
            message: "Password must be at least 8 characters"
        }
    })} 
    placeholder="Password"
    />

{errors.password && (
    <div style={{
        color:"red"
    }}>
        {errors.password.message}
    </div>
)}

<button disabled={isSubmitting}>
    {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  </div>



        </div>
    </form>
  )
}

export default Form