export const handlerButtons =(e, ...fns)=> {
    console.log(fns)
      switch(e.target.id){
      case "btn-all":fns[0]();
      brake; 
      case "btn-angeles":fns[1]();
      brake;
      case "btn-humans":fns[2]();
      brake;
      case "btn-saiyans":fns[3]();
      brake;
      case "btn-fusion":fns[4]();
      brake;
      case "btn-namekians":fns[5]();
      brake;
      case "btn-mestizos":fns[6]();
      brake;
      case "btn-ciborgs":fns[7]();
      brake;
      case "btn-random":fns[8]();
      brake;
      case "btn-erase":fns[9]();
      }
    }