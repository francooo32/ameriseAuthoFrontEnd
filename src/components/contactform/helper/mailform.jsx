export const sendMail=data=>{
    return fetch('https://francodevmailservice.netlify.app/.netlify/functions/api/sendmail',{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(resp=>{
        console.log("response", resp)
        return resp.json();
    }).catch(err=>console.log(err))
}