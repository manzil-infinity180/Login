const forgot = async (email)=>{
  console.log(email);
  try{
    const res = await axios({
      method:'POST',
      url:'http://localhost:8080/api/v1/user/forgotPassword',
      data:{
        email
      }
    });
    
    // console.log(res.data.statusText==='OK');
    // console.log(res);
    

  }catch(err){
    console.log(err.response.data);
    if(err.response.data.status==='Failed'){
      const msg = err.response.data.err;
      alert(msg);
      window.setTimeout(()=>{
        location.assign('/forgotPassword');
      },1500);
    }

  }
}
document.querySelector('.form--login').addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  forgot(email);
})