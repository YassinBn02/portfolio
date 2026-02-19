'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function CVComponent() {
    const languages = [
        { name: 'Español', level: 5 },
        { name: 'Catalán', level: 5 },
        { name: 'Francés', level: 4 },
        { name: 'Inglés', level: 4 },
        { name: 'Árabe', level: 4 },
    ];

    const DotRating = ({ level }: { level: number }) => (
        <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${i <= level ? 'bg-primary' : 'bg-primary/20'
                        }`}
                />
            ))}
        </div>
    );

    return (
        <div className="max-w-[900px] w-full mx-auto shadow-2xl flex flex-col gap-8 mb-20 transition-colors duration-500">
            {/* Page 1 */}
            <div className="flex flex-col md:flex-row min-h-[1200px] bg-background border border-border overflow-hidden rounded-xl">
                {/* Sidebar */}
                <div className="md:w-[35%] bg-muted/30 text-foreground p-8 flex flex-col pt-12 border-r border-border">
                    <div className="relative w-48 h-48 mx-auto mb-12 rounded-full border-[6px] border-primary/20 shadow-xl overflow-hidden group">
                        <Image
                            src="/emna-about.jpg"
                            alt="Emna Bouaoun"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    <div className="mb-12">
                        <p className="text-xs font-bold mb-6 tracking-wider text-primary">22/12/1995</p>
                        <div className="h-[1px] bg-border w-full mb-8" />

                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none text-foreground">Contacto</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center p-2 shrink-0 group-hover:bg-primary/10 group-hover:border-primary transition-colors">
                                    <Phone className="w-full h-full text-primary" fill="currentColor" />
                                </div>
                                <span className="text-sm font-medium tracking-tight group-hover:text-primary transition-colors">+34 640 38 51 70</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center p-2 shrink-0 group-hover:bg-primary/10 group-hover:border-primary transition-colors">
                                    <Mail className="w-full h-full text-primary" fill="currentColor" />
                                </div>
                                <span className="text-sm font-medium tracking-tight group-hover:text-primary transition-colors">emnabc@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center p-2 shrink-0 group-hover:bg-primary/10 group-hover:border-primary transition-colors">
                                    <MapPin className="w-full h-full text-primary" fill="currentColor" />
                                </div>
                                <span className="text-sm font-medium tracking-tight leading-snug group-hover:text-primary transition-colors">
                                    Calle Enric Sagnier 7, 3º 3ª<br />
                                    08172 Sant Cugat del Vallès, Barcelona
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] bg-border w-full mb-8" />

                    <div className="mb-12">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none text-foreground">Idiomas</h2>
                        <div className="space-y-5">
                            {languages.map((lang) => (
                                <div key={lang.name} className="flex items-center justify-between group">
                                    <span className="text-sm font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{lang.name}</span>
                                    <DotRating level={lang.level} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none text-foreground">Habilidades</h2>
                        <div className="space-y-2 text-sm font-bold uppercase tracking-tight text-muted-foreground">
                            {['Pack lectra', 'Open Offices', 'Google Suit', 'Illustrator', 'Canva'].map((skill) => (
                                <p key={skill} className="hover:text-primary transition-colors cursor-default">{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="md:w-[65%] p-10 md:p-14 flex flex-col">
                    <div className="flex flex-col items-end mb-16">
                        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">Emna Bouaoun</h1>
                        <div className="h-[2px] bg-primary/20 w-full mb-6" />
                        <p className="text-xl md:text-2xl font-black text-right leading-none tracking-tighter uppercase max-w-[400px] text-muted-foreground">
                            Diseñadora de vestuario, diseñadora de moda y emprendedora
                        </p>
                    </div>

                    <section className="flex-1 space-y-12">
                        <div>
                            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 underline decoration-primary decoration-4 underline-offset-8 text-foreground">Experiencia profesional</h2>
                            <div className="mb-8">
                                <h3 className="text-sm font-black mb-6 uppercase tracking-tight text-primary">Diseñadora de vestuario</h3>
                                <div className="space-y-4">
                                    {(() => {
                                        let lastYear = '';
                                        return [
                                            { year: '2025', desc: 'Serie de televisión. Arken Harb. Rabii Takeli. Darc Entertainment' },
                                            { year: '2025', desc: 'Cortometraje. De rêver l’homme s’est arrêté. Audiimage Prod' },
                                            { year: '2025', desc: 'Cortometraje. Mots Croisés. Slim Rihiba. KO Prod' },
                                            { year: '2025', desc: 'Serie de televisión. Rafle. Rabii Takeli. Darc Entertainment' },
                                            { year: '2024', desc: 'Serie de televisión. Salla Salla. Mohamed Ali Mihoub. Crescendo Prod' },
                                            { year: '2024', desc: 'Spot publicitario. Suzuki. Linea Prod' },
                                            { year: '2024', desc: 'Programa televisivo. Naham DZ. Wellcome Prod' },
                                            { year: '2024', desc: 'Pieza de danza teatral. Tanit. Kais Chouibi' },
                                            { year: '2023', desc: 'Obra de teatro. Akher el bahr. Fadel Jaibi' },
                                            { year: '2023', desc: 'Película La Maison Dorée. Salma Baccar' },
                                            { year: '2023', desc: 'Pieza de baile. May B. Sihem Belkhodja' },
                                            { year: '2023', desc: 'Spot publicitario. Selja. Linea Prod' },
                                            { year: '2023', desc: 'Cortometraje. Mansura. Anis Ben Dali' },
                                            { year: '2023', desc: 'Spot publicitario. Al Mazraa. Linea Prod' },
                                            { year: '2023', desc: 'Pieza de baile. Ghamardi de Hazem Chebbi' },
                                            { year: '2022', desc: 'Pieza de baile. Lucidream de Marwen Ben Cheikh' },
                                            { year: '2022', desc: 'Pieza de baile. Salem de Imed Jemaa' },
                                            { year: '2022', desc: 'Spot publicitario. Orange. Linea Prod' },
                                            { year: '2021', desc: 'Spot publicitario Aslda. Linea Prod' },
                                        ].map((item, idx) => {
                                            const showYear = item.year !== lastYear;
                                            lastYear = item.year;
                                            return (
                                                <div key={idx} className="flex gap-5 text-[10px] md:text-[11px] font-bold leading-tight tracking-tight uppercase group">
                                                    <span className="w-8 shrink-0 text-primary">{showYear ? item.year : ''}</span>
                                                    <p className="flex-1 text-muted-foreground group-hover:text-foreground transition-colors">{item.desc}</p>
                                                </div>
                                            );
                                        })
                                    })()}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-black mb-6 uppercase tracking-tight text-primary">Asistente de vestuario de cine</h3>
                                <div className="space-y-4">
                                    {(() => {
                                        let lastYear = '';
                                        return [
                                            { year: '2025', desc: 'Largometraje. Algo cayó del cielo. Linea Prod Khallat. Aziz Aljasmi. Netflix Arabia Saudí' },
                                            { year: '2024', desc: 'Opereta. Noubet Ghram. Rio Prod' },
                                            { year: '2024', desc: 'Spot publicitario. Orange. Linea Studio' },
                                            { year: '2023', desc: 'Spot Jo Malone. Dubai. Astudio Agency' },
                                            { year: '2023', desc: 'Largometraje. Tunis- Djerba. Amel Guelety. Atlas Vision Prod' },
                                            { year: '2023', desc: 'Spot publicitario Ooredoo. Rani Rani' },
                                            { year: '2023', desc: 'Spot publicitario BioLuxe. Linea Prod' },
                                            { year: '2023', desc: 'Spot publicitario Golden Coffee. Linea Prod' },
                                            { year: '2023', desc: 'Spot publicitario Ricota Kaiser. CTV' },
                                            { year: '2023', desc: 'Spot publicitario Smoothie Delice. Linea Prod' },
                                            { year: '2023', desc: 'Spot publicitario Blat. Red Prod' },
                                            { year: '2022', desc: 'Largometraje. Roll. Propaganda Prod' },
                                            { year: '2022', desc: 'Spot publicitario Telecoms mondial. Red Prod' },
                                            { year: '2022', desc: 'Spot publicitario KFC. Linea Prod' },
                                            { year: '2022', desc: 'Spot publicitario Tata Mercedes. Propaganda Prod' },
                                            { year: '2022', desc: 'Spot publicitario Fanta. Propaganda Prod' },
                                            { year: '2022', desc: 'Spot publicitario Shell. Red Prod' },
                                            { year: '2022', desc: 'Serie televisiva Ken Ya Makanach' },
                                        ].map((item, idx) => {
                                            const showYear = item.year !== lastYear;
                                            lastYear = item.year;
                                            return (
                                                <div key={idx} className="flex gap-5 text-[10px] md:text-[11px] font-bold leading-tight tracking-tight uppercase group">
                                                    <span className="w-8 shrink-0 text-primary">{showYear ? item.year : ''}</span>
                                                    <p className="flex-1 text-muted-foreground group-hover:text-foreground transition-colors">{item.desc}</p>
                                                </div>
                                            );
                                        })
                                    })()}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Page 2 */}
            <div className="flex flex-col md:flex-row min-h-[1200px] bg-background border border-border overflow-hidden rounded-xl">
                {/* Sidebar Space */}
                <div className="hidden md:block md:w-[35%] bg-muted/30 border-r border-border" />

                {/* Content Area */}
                <div className="md:w-[65%] p-10 md:p-14 md:pt-24 flex flex-col">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 underline decoration-primary decoration-4 underline-offset-8 text-foreground">Fundadora y diseñadora de Boauna</h2>
                            <p className="text-xs font-bold mb-6 italic tracking-tight uppercase text-primary">Boauna es una marca para hombre, mujer y unisex de estilo urbano</p>
                            <div className="space-y-4 mb-8">
                                {(() => {
                                    let lastYear = '';
                                    return [
                                        { year: '2023', desc: 'Colección verano' },
                                        { year: '2023', desc: 'Colección Petrol. Otoño- Invierno' },
                                        { year: '2022', desc: 'Colección Earth Sand Mud. Otoño- Invierno' },
                                        { year: '2022', desc: 'Colección Al Cantara. Primavera- Verano' },
                                        { year: '2021', desc: 'Colección Cadenas. Otoño- Invierno' },
                                        { year: '2021', desc: 'Colección Boauna. Primavera- Verano' },
                                    ].map((item, idx) => {
                                        const showYear = item.year !== lastYear;
                                        lastYear = item.year;
                                        return (
                                            <div key={idx} className="flex gap-5 text-[10px] md:text-[11px] font-bold leading-tight tracking-tight uppercase group">
                                                <span className="w-8 shrink-0 text-primary">{showYear ? item.year : ''}</span>
                                                <p className="flex-1 text-muted-foreground group-hover:text-foreground transition-colors">{item.desc}</p>
                                            </div>
                                        );
                                    })
                                })()}
                            </div>
                            <p className="text-xs md:text-sm font-bold leading-relaxed tracking-tight uppercase text-muted-foreground border-l-2 border-primary/20 pl-4 py-2">
                                Realización de diseños a plano y en figurín, compra de tejidos,
                                elaboración de prototipos, gestión y logística de la marca.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 underline decoration-primary decoration-4 underline-offset-8 text-foreground">Proyectos</h2>
                            <div className="space-y-8">
                                {[
                                    { year: '2021', title: 'Minassa', desc: 'Incubación de mi proyecto personal Boauna Minassa' },
                                    { year: '2020', title: 'Moodha Ohra', desc: 'Proyecto de creación de una colección cápsula upcycling' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5 text-[10px] md:text-[11px] font-bold uppercase tracking-tight group">
                                        <span className="w-8 shrink-0 text-primary">{item.year}</span>
                                        <div>
                                            <h4 className="font-black mb-1 text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="italic text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 underline decoration-primary decoration-4 underline-offset-8 text-foreground">Prácticas</h2>
                            <div className="mb-6">
                                <h3 className="text-sm font-black mb-6 uppercase tracking-tight text-primary">Patronaje y confección</h3>
                                <div className="space-y-4">
                                    {[
                                        { year: '2019', desc: 'Ahpy, Bleu de Pastel - Toulouse, Francia (Erasmus)' },
                                        { year: '2018', desc: 'Colmillo de morsa - Barcelona, España' },
                                        { year: '2017', desc: 'Anna Tichy - Barcelona, España' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-5 text-[10px] md:text-[11px] font-bold uppercase tracking-tight group">
                                            <span className="w-8 shrink-0 text-primary">{item.year}</span>
                                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 underline decoration-primary decoration-4 underline-offset-8 text-foreground">Estudios</h2>

                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-sm font-black mb-6 uppercase tracking-tight text-primary">Convergence, Túnez</h3>
                                    <div className="space-y-4">
                                        {(() => {
                                            let lastYear = '';
                                            return [
                                                { year: '2020', desc: 'Patronaje para malla' },
                                                { year: '2019', desc: 'Diseño y estilismo' },
                                                { year: '2019', desc: 'Patronaje hombre' },
                                            ].map((item, idx) => {
                                                const showYear = item.year !== lastYear;
                                                lastYear = item.year;
                                                return (
                                                    <div key={idx} className="flex gap-5 text-[10px] md:text-[11px] font-bold uppercase tracking-tight group">
                                                        <span className="w-8 shrink-0 text-primary">{showYear ? item.year : ''}</span>
                                                        <p className="flex-1 text-muted-foreground group-hover:text-foreground transition-colors">{item.desc}</p>
                                                    </div>
                                                );
                                            })
                                        })()}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-black mb-6 uppercase tracking-tight text-primary line-clamp-1">INS Anna Gironella de Mundet, Barcelona</h3>
                                    <div className="flex gap-5 text-[10px] md:text-[11px] font-bold uppercase tracking-tight group">
                                        <span className="w-8 shrink-0 text-primary">2016-2018</span>
                                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">CFGS Patronaje y confección</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-black mb-6 uppercase tracking-tight text-primary">INS Poeta Maragall, Barcelona</h3>
                                    <div className="flex gap-5 text-[10px] md:text-[11px] font-bold uppercase tracking-tight group">
                                        <span className="w-8 shrink-0">2014-2016</span>
                                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">Bachillerato escénico</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
