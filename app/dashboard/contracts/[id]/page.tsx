//import Image from "next/image";
import AddNewContract from "../new/addNewContract";
import AllContracts from "../allContracts";


const Home = () =>{

  return (
    <section className="flex text-neutral max-h-screen overflow-y-clip bg-neutral-100/50">
      <AllContracts show={false} />
      <AddNewContract />
    </section>
  )
}

export default Home