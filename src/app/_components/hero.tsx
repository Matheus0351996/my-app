import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr';
import dogImg from '../../../public/hero-dog.webp'
import Image from 'next/image';
import catImg from '../../../public/cat-hero.png'
export function Hero() {
    return (
       <section className="bg-[#E84C3D] text-white relative overflow-hidden">
        <div>
            <Image 
            src={dogImg}
            alt='Foto do cachorro'
            fill
            sizes='100vw'
            priority
            className='object-cover opacity-60 lg:hidden'
            />
            <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
        </div>


           <div className='container mx-auto px-4 pt-16 pb-16 md:pb-0 relative '>
            <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='space-y-6'>
                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-10">
                        Seu pet merece cuidado, carinho e atenção especial.
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-6">
                        Oferecemos os melhores serviços para garantir a saúde e felicidade do seu amigo de quatro patas.
                    </p>
                     
                        <a href="#" className="gap-2 bg-green-400 w-fit rounded-md px-5 py-2 font-semibold flex items-center justify-center text-white  hover:underline">
                           <WhatsappLogoIcon className='w-5 h-5' />
                            Contato via Whatsapp
                            
                        </a>
                    
                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-md">
                                5% 
                            </b>
                        de desconto na primeira consulta!
                        </p>
                        <div className='flex mt-4'>
                        <div className='w-32 hidden lg:block'>
                        <Image 
                        src={catImg} 
                        alt="Gato feliz"
                        quality={100}
                        className='object-fill w-20 md:w-64 lg:w-72'
                        />
                    </div>
                        </div>
                    </div>
                    
                </div>
                 <div className='hidden md:block h-full relative'>
                       <Image 
                        src={dogImg} 
                        alt="Cachorro feliz" 
                        className='object-contain'
                        fill
                        sizes="{max-width: 768px} 0vw, 50vw"
                        quality={100}
                        priority
                       />
                    </div>
            </article>
           </div>
       </section> 
    )
};