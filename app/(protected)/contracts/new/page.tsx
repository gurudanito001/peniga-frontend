import AddNewContract from "./addNewContract";
import { getToken } from "@/app/lib/auth";


const CreateContract = async ()=>{
  const token = await getToken() as string;
  console.log(token)
  return(
    <AddNewContract token={token} />
  )
}

export default CreateContract