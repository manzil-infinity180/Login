const signup = async(email,password,confirmPassword)=>{
  console.log(email,password,confirmPassword);
  try{
    const res = await axios({
      method:'POST',
      url:'http://localhost:8080/api/v1/user/signup',
      data:{
        email,
        password,
        confirmPassword
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
        location.assign('/signup');
      },1500);
    }
  }
}
document.querySelector('.form--login').addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
   signup(email,password,confirmPassword); 
})

