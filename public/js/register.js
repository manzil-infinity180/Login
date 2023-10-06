const register = async(email,password,confirmPassword,name,job,language)=>{
  console.log(email,password,confirmPassword,job,language,name);
  try{
    const res = await axios({
      method:'POST',
      url:'http://localhost:8080/api/v1/user/registration',
      data:{
        email,
        password,
        confirmPassword,
        job,
        name,
        language
      }
    });
    console.log(res);
    if(res.data.status==='Success'){
      alert("CREATED YOUR ACCOUNT !!! Logged In Successfully");
      window.setTimeout(()=>{
        location.assign('/');
      },1500);
    }
    

  }catch(err){
    console.log(err.response.data);
    if(err.response.data.status==='Failed'){
      const msg = err.response.data.err;
      
      alert(msg);
      window.setTimeout(()=>{
        location.assign('/registration');
      },1500);
    }
  }
}
document.querySelector('.form--login').addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const name = document.getElementById('name').value;
  const job = document.getElementById('job').value;
  const language = document.getElementById('language').value;
  // console.log(email,password,confirmPassword,name,job,language);
   register(email,password,confirmPassword,name,job,language); 
})

