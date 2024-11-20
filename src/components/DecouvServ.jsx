import React, {useState} from 'react';
export default function DecServ() {
  const[Change,setChange] = useState("./homephotos/Custom-Luxury-Home-Dallas.jpg");
  const[ChangeBack,setChangeBack] = useState("./homephotos/energies_renouvelables_grand_est_2023.jpg");
  const[ChangeP2,setChangeP2] = useState("./homephotos/Custom-Luxury-Home-Dallas.jpg");
  const[ChangeBackP2,setChangeBackP2] = useState("./homephotos/P22.jpg");



  function handelClick(){
    if(Change === "./homephotos/Custom-Luxury-Home-Dallas.jpg"){
      setChange("./homephotos/energies_renouvelables_grand_est_2023.jpg");
    }
    else{
      setChange("./homephotos/Custom-Luxury-Home-Dallas.jpg");
    }
    if (ChangeBack === "./homephotos/energies_renouvelables_grand_est_2023.jpg" ){
      setChangeBack("./homephotos/Custom-Luxury-Home-Dallas.jpg");
    }
    else{
      setChangeBack("./homephotos/energies_renouvelables_grand_est_2023.jpg");
    }
  }

  function handelClickP2(){
    if(ChangeP2 === "./homephotos/Custom-Luxury-Home-Dallas.jpg"){
      setChangeP2("./homephotos/P22.jpg");
    }
    else{
      setChangeP2("./homephotos/Custom-Luxury-Home-Dallas.jpg");
    }
    if (ChangeBackP2 === "./homephotos/P22.jpg" ){
      setChangeBackP2("./homephotos/Custom-Luxury-Home-Dallas.jpg");
    }
    else{
      setChangeBackP2("./homephotos/P22.jpg");
    }
  }
  
  return (
    <>
      <h2 style={{margin:"20px" , fontSize:"40px"}}>Decouvrez nos services</h2>
      <div className = "ServicSect"
      style = {{width :" 100%" , display:"flex",margin:"30px"}}>
        <div className="Serve" style = {{width:"'45%"}} >
          <img src= {Change} alt="" style= {{width:"500px" , borderRadius:"5px"}} />
        </div>
        <div className="ListServ" style = {{width:"50%" , display:"flex", flexDirection:"column",justifyContent:"center",alignContent:"start"}}>
          <div className="servDesc" style = {{width:"100%",display:"flex",flexDirection:"row"}}  onClick={handelClick}>
        <img src={ChangeBack} alt="" style ={{width:"20%",margin:"10px",borderRadius:"5px"}} />
          <p style = {{width:"60%"}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis vitae culpa accusantium praesentium laboriosam
            </p>
          </div>
          <div className="servDesc" style = {{width:"100%",display:"flex",flexDirection:"row"}} onClick={handelClickP2} >
          <img src="./homephotos/P22.jpg" alt="" style ={{width:"20%",margin:"10px",borderRadius:"5px"}} />
            <p style = {{width:"60%"}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis vitae culpa accusantium praesentium laboriosam
              
            </p>
          </div>
          <div className="servDesc" style = {{width:"100%",display:"flex",flexDirection:"row"}}>
          <img src="./homephotos/transition-climat-energies-renouvelables-France-UE-objectif.jpg" alt="" style ={{width:"20%",margin:"10px",borderRadius:"5px"}} />
          <p style = {{width:"60%"}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis vitae culpa accusantium praesentium laboriosa
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
