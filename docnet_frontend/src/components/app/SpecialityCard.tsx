import AspectRatio from '@mui/joy/AspectRatio';
// import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
// import Typography from '@mui/joy/Typography';

// import {
//     Card as ShadcnCard,
//     CardContent as ShadcnCardContent
// } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const SPECIALITIES = [
    'Cardiologist',
    'Gastroenterologist',
    'Hematologist',
    'Neurologist',
    'Oncologist',
    'Ophthalmologist',
    'Orthopedics',
    'Pediatrics',
    'Psychiatrist',
    'Radiologist',
    'Obstetrics and Gynecologist',
    'General Practitioner'
]


export default function SpecialityCard() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-4xl mx-auto"
        >
            <CarouselContent>
                {SPECIALITIES.map((name, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/5 md:basis-1/6">
                        <div className="p-1">
                            {/* <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card> */}
                            <Card
                                variant="outlined"
                                orientation="horizontal"
                                sx={{
                                    width: 120,
                                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                                    display: 'block',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <AspectRatio ratio="1" sx={{ width: 90, height: 90, borderRadius: "100%" }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                        srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                    />
                                </AspectRatio>
                                <CardContent sx={{ justifyContent: 'center' }}>
                                    <Chip
                                        variant="outlined"
                                        color="primary"
                                        size="sm"
                                        sx={{ pointerEvents: 'none', mt: 2, ml: 1.3 }}
                                    >
                                        {name}
                                    </Chip>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='' />
            <CarouselNext />
        </Carousel>
    );
}
