import './LoginForm.css'


function LoginForm () {

    return(
        <>
            <section className="mainBackground">
                <div className="formWrap">
                    <h2>Login</h2>
                    <form action="">
                        <input type="text" name="firstName" placeholder="First Name" />
                        <br />
                        <br />
                        <input type="text" name="LastName" placeholder="Last Name" /> 
                        <br />
                        <br />
                        <input type="email" name="email" placeholder="Email" />
                        <br />
                        <br />
                        <input type="password" name="password" placeholder="Password" />
                        <br />
                        <br />
                        <h5><label htmlFor="image">Upload Image </label>*</h5>
                        <input type="file" id="image" name="image" accept="image/*" />
                        

                        <button id="btn" type="submit">Login</button>

                     
                    </form>
                </div>
            </section>
        
        </>
    )
    
}


export default LoginForm