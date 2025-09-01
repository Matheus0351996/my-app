import Image from "next/image";
import animals from '../../../public/about-1.png'
import animals2 from '../../../public/about-2.png'

export function About() {
    return(
        <section className="bg-[#FDF6ec] py-16">
           <div className="container  mx-auto grid-cols-1 lg:grid-cols-2 gap12 relative
           items-center">

                    <div>
                    {/* Container das imagens */}


                            <div className=" relative w-full h-[400px] rounded-3xl overflow-hidden">
                                <Image 
                                src={animals}
                                alt='Foto de cachorro e gato'
                                fill
                                quality={100}
                                priority
                                className="object-cover hover:scale-110 duration-300"
                                />
                            </div>
                             <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden border-white rounded-lg ">
                                <Image 
                                src={animals2}
                                alt='Foto de cachorro e gato'
                                />  
                            </div> 
                            
                    </div>
            </div>
                            
                <h1>SOBRE</h1> 
        
        </section>
    )
};