import Button from "../../shared/Button";
import img1 from "../../images/illustration-intro.svg"


const Section1 = () => {
  return (
    <div className='max-w-5xl m-auto flex justify-between h-screen'>
      <div className='flex flex-col basis-1/2 items-start justify-evenly pt-32 pb-32 '>
        <h1 className='text-darkBlue text-5xl font-semibold '>
          Bring everyone together to build better products.
        </h1>
        <p className="text-darkGrayishBlue w-80" >
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button btnText='Get Started' />
      </div>
      <div className=' basis-1/2 self-center'>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default Section1