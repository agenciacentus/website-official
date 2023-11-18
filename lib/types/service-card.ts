export type ServiceCard = {
    id: string;
    
    title: string;
    description: string;
    imagePath: string;

    priceMinArs: number;
    priceMaxArs: number;
    priceMinUsd: number;
    priceMaxUsd: number;

    waitingTime: number;
};