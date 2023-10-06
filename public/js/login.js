// const { default: axios } = require("axios");

const login = async (email,password ) =>{
  console.log(email,password);
  try{
    const res = await axios({
    method:'POST',
    url:'http://localhost:8080/api/v1/user/login',
    data:{
      email,
      password
    }
  });
  if(res.data.status==='Success'){
    alert("Logged In Successfully");
    window.setTimeout(()=>{
      location.assign('/');
    },2000);
  }
  
  console.log(res);
  console.log(res.data.status);
  }catch(err){
    console.log(err.response.data);
    console.log(err.response.data.status);
    if(err.response.data.status ==='Failed'){
      alert("Email or Password is Wrong! Try Again");
      window.setTimeout(()=>{
        location.assign('/login');
      },1200);
    }
  }
  
}

document.querySelector('.form').addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
   login(email,password); 
})
