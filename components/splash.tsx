import Image from 'next/image'

const Splash = () => {
    return (
    <section>
      <div className="mb-8 md:mb-16">
          <div className="flex min-h-full py-10 justify-center items-center">
            <Image src="/assets/icons/BaseWeightMascot.svg" height={200} width={200} alt="Home"/>
          </div>
          <div className="flex justify-center items-center">
            <span className="self-center text-6xl font-semibold whitespace-nowrap dark:text-white">BaseWeight</span>
          </div>
          <div className="flex justify-center items-center">
            <span className="self-center font-semibold whitespace-nowrap dark:text-white">(Full site coming soon)</span>
          </div>
      </div>      
    </section>
    )
}

export default Splash