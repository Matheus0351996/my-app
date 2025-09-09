"use client"
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft,ChevronRight,Scissors,Syringe, CarTaxiFront, Hotel, Clock  } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
    Title: "Banho e Tosa Completo",
    Description: "Pacote de higiene completo para cães e gatos, incluindo corte de unhas e escovação.",
    Duration: "1h 30min",
    Price: "R$ 80,00",
    Icon: "🛁",
    LinkText: "Agendar Serviço"
  },
  {
    Title: "Ração Premium 10kg",
    Description: "Ração de alta qualidade para cães adultos, com vitaminas e proteínas balanceadas.",
    Duration: "Consumo diário",
    Price: "R$ 220,00",
    Icon: "🍖",
    LinkText: "Comprar Agora"
  },
  {
    Title: "Vacinação Antirrábica",
    Description: "Aplicação da vacina antirrábica com certificado incluso para cães e gatos.",
    Duration: "30 minutos",
    Price: "R$ 90,00",
    Icon: "💉",
    LinkText: "Agendar Vacina"
  },
  {
    Title: "Brinquedo Mordedor",
    Description: "Brinquedo resistente e atóxico para estimular a mastigação e diversão do pet.",
    Duration: "Uso contínuo",
    Price: "R$ 35,00",
    Icon: "🦴",
    LinkText: "Adicionar ao Carrinho"
  }
];




export function Services() {
    
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop:false,
        align:"start",
        slidesToScroll:1,
        breakpoints:{
            "(min-width:760px)": {slidesToScroll:3}
        }
    });

    return(
        <section className="bg-white  py-16  mx-auto"> {/*Container da Tela  */}
            
            <div className="container mx-auto px-4"> {/* Container alinhamentos */}

                <h2 className="text-4xl font-bold mb-12">Nossos Serviços</h2>
                
                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col"> 
                                        <div className='flex-1 flex items-start justify-between'>
                                           
                                            <div>
                                                <span className="text-3xl">{item.Icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-1 my-1">{item.Title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.Description}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex  items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.Duration}</span>
                                            </div>


                                            <a
                                            href="#"
                                            className="flex items-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                                            >
                                                Entrar em contato
                                                <WhatsappLogoIcon className="w-5 h-5"/>
                                            </a>
                                        </div>

                                    </article>
                                </div>    

                            ))}

                        </div>

                    </div>


                </div>


            </div>
            


        </section>
    );
}






