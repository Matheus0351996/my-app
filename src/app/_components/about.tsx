'use client';

import Image from 'next/image';
import animals from '../../../public/about-1.png';
import animals2 from '../../../public/about-2.png';
import { CheckIcon } from '@phosphor-icons/react';

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 relative items-center">
        <div className="relative">
          {/* Container das imagens */}
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={animals}
              alt="Foto de cachorro e gato"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300"
            />
          </div>
          <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden border-white rounded-lg">
            <Image src={animals2} alt="Foto de cachorro e gato" />
          </div>
        </div>
      </div>

      <div className="space-y-6 ml-6 mt-12">  
        {/* //Container do sobre  */}

        <h2 className="text-4xl font-bold">SOBRE</h2>

        <p>
          Until one has loved an animal, a part of one's soul remains unawakened. We
          believe that every animal deserves a loving home and a chance to thrive. Our
          mission is to connect these wonderful creatures with compassionate individuals
          who are ready to open their hearts and homes. Offering a second chance to those
          in need, we strive to make the world a better place, one adoption at a time.
        </p>
    <div className='relative'>
        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <CheckIcon weight='bold' color='red' /> 
            <span>Aberto desde 2006</span>
          </li>

          <li className="flex items-center gap-2">
            <CheckIcon weight='bold' color='red' /> 
            <span>Equipe com mais de 10 veterinários.</span>
          </li>

          <li className="flex items-center gap-2">
            <CheckIcon weight='bold' color='red' /> 
            <span>Qualidade é nossa prioridade.</span>
          </li>
        </ul>
    </div>
    <div className='mt-6 flex flex-wrap gap-4'>
        <a href="#" className="  px-5 py-2 bg-red-500 w-fit rounded-md font-semibold   text-white hover:underline">
            Contato via WhatsApp

            </a>
        <a href="#" className="  px-5 py-2 bg-red-500 w-fit rounded-md font-semibold   text-white hover:underline">
            Endereço da Loja
            
            </a>
    </div>
    
      </div>
    </section>
  );
}
